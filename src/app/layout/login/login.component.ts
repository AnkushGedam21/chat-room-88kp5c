import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,Validators } from '@angular/forms';
 
import { UserService } from '../../services/user.service';

import { UserListService } from '../../services/user-list.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm:FormGroup;
  constructor(public userServ:UserService,
  public chatList:UserListService) { }

  ngOnInit() {
     this.loginForm = new FormGroup({
      phone: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    });
  }

  login(){
    this.userServ.login(this.loginForm.value);
  }

}