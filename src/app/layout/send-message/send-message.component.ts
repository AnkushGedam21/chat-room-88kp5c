import { Component, OnInit } from '@angular/core';

import { ChatServiceService } from '../../services/chat-service.service';

import { FormControl,FormGroup,Validators } from '@angular/forms';

import { UserListService } from '../../services/user-list.service';

import { UserService } from '../../services/user.service';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  sendMesgForm:FormGroup;
  constructor(public chatServ:ChatServiceService,
  public usrList:UserListService,
  public userServ:UserService) { }

  ngOnInit() {
     this.sendMesgForm = new FormGroup({
      msg: new FormControl('',Validators.required)
    });

  //  let intid = setInterval(() => {
  //     let mid = this.chatServ.messages[this.chatServ.messages.length-1].created;
  //     console.log(mid);
  //     this.chatServ.load_new_msg(this.userServ.userid,mid);
  //     clearInterval(intid);
  //   }, 30000);
  }

  send_message(){
    if(this.sendMesgForm.valid){
      let m = {
        'userid':this.usrList.active_user.id,
        'membid':this.userServ.userid,
        'content':this.sendMesgForm.controls.msg.value,
        'type':0,
        'created':new Date().getTime()/1000
      }
      this.chatServ.put_message(m);
      this.sendMesgForm.reset();
    }
  }

}