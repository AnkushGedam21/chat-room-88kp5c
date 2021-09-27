import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup } from '@angular/forms';

import { UserListService } from '../../services/user-list.service';

import { ChatServiceService } from '../../services/chat-service.service';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

 userChatForm:FormGroup;
  constructor(public chatList:UserListService,
  public chatServ:ChatServiceService,
  public userServ:UserService) {
    // this.chatServ.getMessages(1,this.userServ.userid);
  }

  ngOnInit() {
    this.userChatForm = new FormGroup({
      userActive: new FormControl('0')
    });
  }

  open_chat(userid){
    if(userid != this.chatList.active_user_id){
    this.chatServ.getMessages(userid,this.userServ.userid);
   this.chatList.active_user_id = userid;
   this.chatList.set_user_chat(this.userChatForm.controls.userActive.value);
    }
  }
}