import { Component, OnInit } from '@angular/core';

import { ChatServiceService } from '../../services/chat-service.service';

import { UserListService } from '../../services/user-list.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
 
  today;
  messages:any = [];
  constructor(public chatServ:ChatServiceService,public chatList:UserListService) {
   }

  ngOnInit() {
    let t = new Date();
    t = new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0);
    this.today = t.getTime()/1000;
  }

}