import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(
    public auth: AuthService
  ) {

    console.log(auth.loggedIn)
    this.auth.userProfile$.subscribe(res =>{
      console.log(res)
    },err =>{
      console.log(err)
    })
    
  }

}
