import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    console.log('hello profile')
    this.auth.userProfile$.subscribe(res =>{
      console.log(res)
    },err =>{
      console.log(err)
    })
  }

}
