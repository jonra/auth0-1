import { Injectable, NgZone } from '@angular/core';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
// import * as config from '../../../auth_config.json';
import { from, of, Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

// Import AUTH_CONFIG, Auth0Cordova, and auth0.js
import { AUTH_CONFIG } from './auth.config';
import Auth0Cordova from '@auth0/cordova';
import * as auth0 from 'auth0-js';
import { Platform } from '@ionic/angular';

declare let cordova: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Create an observable of Auth0 instance of client
  auth0Client$ = (from(
    createAuth0Client({
      domain: "dev-0-3qnco2.auth0.com",
      client_id: "hxWhDv4PpQV6kySkl2yD5iioTM3DZDIT",
      redirect_uri: `${window.location.origin}`
    })

  ) as Observable<Auth0Client>).pipe(
    shareReplay(1), // Every subscription receives the same shared value
    catchError(err => throwError(err))
  );
  // Define observables for SDK methods that return promises by default
  // For each Auth0 SDK method, first ensure the client instance is ready
  // concatMap: Using the client instance, call SDK method; SDK returns a promise
  // from: Convert that resulting promise into an observable
  isAuthenticated$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.isAuthenticated())),
    tap(res => this.loggedIn = res)
  );
  handleRedirectCallback$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
  );
  // Create subject and public observable of user profile data
  private userProfileSubject$ = new BehaviorSubject<any>(null);
  userProfile$ = this.userProfileSubject$.asObservable();
  // Create a local property for login status
  loggedIn: boolean = null;

  Auth0 = new auth0.WebAuth(AUTH_CONFIG);
  Client = new Auth0Cordova(AUTH_CONFIG);
  accessToken: string;
  user: any;
  loading = true;
  constructor(private router: Router, public zone: NgZone,
    private storage: Storage,
    private safariViewController: SafariViewController, private platform: Platform) {
    if (this.platform.is('android')) {
      console.log('android')
      this.storage.get('profile').then(user => this.user = user);
      this.storage.get('access_token').then(token => this.accessToken = token);
      this.storage.get('expires_at').then(exp => {
        this.loggedIn = Date.now() < JSON.parse(exp);
        this.loading = false;
      });
    }
    else {
      this.loading = false;
      // On initial load, check authentication state with authorization server
      // Set up local auth streams if user is already authenticated
      this.localAuthSetup();
      // Handle redirect from Auth0 login
      this.handleAuthCallback();
    }

  }

  // When calling, options can be passed if desired
  // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
  getUser$(options?): Observable<any> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getUser(options))),
      tap(user => this.userProfileSubject$.next(user))
    );
  }

  private localAuthSetup() {
    // This should only be called on app initialization
    // Set up local authentication streams
    const checkAuth$ = this.isAuthenticated$.pipe(
      concatMap((loggedIn: boolean) => {
        if (loggedIn) {
          // If authenticated, get user and set in app
          // NOTE: you could pass options here if needed
          return this.getUser$();
        }
        // If not authenticated, return stream that emits 'false'
        return of(loggedIn);
      })
    );
    checkAuth$.subscribe();
  }

  login(redirectPath: string = 'profile') {
    if (this.platform.is('android')) {
      console.log('android')
      this.loading = true;
      const options = {
        scope: 'openid profile offline_access'
      };
      // Authorize login request with Auth0: open login page and get auth results
      this.Client.authorize(options, (err, authResult) => {
        if (err) {
          this.zone.run(() =>
            this.loading = false
          );
          throw err;
        }
        // Set access token
        this.storage.set('access_token', authResult.accessToken);
        this.accessToken = authResult.accessToken;
        // Set access token expiration
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        this.storage.set('expires_at', expiresAt);
        // Set logged in
        this.loading = false;
        this.loggedIn = true;
        // Fetch user's profile info
        this.Auth0.client.userInfo(this.accessToken, (err, profile) => {
          if (err) {
            throw err;
          }
          this.storage.set('profile', profile).then(val =>
            this.zone.run(() => this.user = profile)
          );
        });
      });
    }
    else {
      // A desired redirect path can be passed to login method
      // (e.g., from a route guard)
      // Ensure Auth0 client instance exists
      this.auth0Client$.subscribe((client: Auth0Client) => {
        // Call method to log in
        console.log(JSON.stringify(client))
        console.log('hello')
        client.loginWithRedirect({
          redirect_uri: `${window.location.origin}`,
          appState: { target: redirectPath }
        });
      });
    }
  }

  private handleAuthCallback() {
    console.log('hello')
    // Call when app reloads after user logs in with Auth0
    const params = window.location.search;
    console.log(params)
    if (params.includes('code=') && params.includes('state=')) {
      let targetRoute: string; // Path to redirect to after login processsed
      const authComplete$ = this.handleRedirectCallback$.pipe(
        // Have client, now call method to handle auth callback redirect
        tap(cbRes => {
          console.log(cbRes)
          // Get and set target redirect route from callback results
          targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
        }),
        concatMap(() => {
          // Redirect callback complete; get user and login status
          return combineLatest([
            this.getUser$(),
            this.isAuthenticated$
          ]);
        })
      );
      // Subscribe to authentication completion observable
      // Response will be an array of user and login status
      authComplete$.subscribe(([user, loggedIn]) => {
        // Redirect to target route after callback processing
        this.router.navigate([targetRoute]);
      });
    }
    else {
      // console.log('da paky dy')
    }
  }

  logout() {
    if (this.platform.is('android')) {
      console.log('android')
      this.storage.remove('profile');
      this.storage.remove('access_token');
      this.storage.remove('expires_at');
      this.accessToken = null;
      this.user = null;
      this.loggedIn = false;

      this.safariViewController.isAvailable()
        .then((available: boolean) => {
          const auth0Domain = AUTH_CONFIG.domain;
          const clientId = AUTH_CONFIG.clientId;
          const pkgId = AUTH_CONFIG.packageIdentifier;
          let url = `https://${auth0Domain}/v2/logout?client_id=${clientId}&returnTo=${pkgId}://${auth0Domain}/cordova/${pkgId}/callback`;
          if (available) {
            this.safariViewController.show({
              url: url
            })
              .subscribe((result: any) => {
                if (result.event === 'opened') console.log('Opened');
                else if (result.event === 'loaded') console.log('Loaded');
                else if (result.event === 'closed') console.log('Closed');
              },
                (error: any) => console.error(error)
              );
          } else {
            // use fallback browser
            cordova.InAppBrowser.open(url, '_system');
          }
        }
        );
    } else {
      // Ensure Auth0 client instance exists
      this.auth0Client$.subscribe((client: Auth0Client) => {
        // Call method to log out
        client.logout({
          client_id: "hxWhDv4PpQV6kySkl2yD5iioTM3DZDIT",
          returnTo: window.location.origin
        });
      });
    }

  }

}
