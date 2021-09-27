import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';

import { UserListService } from './user-list.service';
import { ChatServiceService } from './chat-service.service';

@Injectable()
export class UserService {

  userAuthenticated:boolean =false;
  user:any = {
    name:''
  };
  _loginURL = 'https://sendsafe.com.au/testdev/chat_web/validate_login';
  userid:number;
  constructor(private _http:HttpClient,public chatList:UserListService,
  public chatServ:ChatServiceService) {
     
  }

  login(user){
      let httpheaders = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
      let pdata = {'mobile':user.phone,"password":user.password};
      this._http.post(this._loginURL,pdata,{headers:httpheaders})
      .subscribe((data)=>{
          this.userAuthenticated =true;
          this.user = data;
          this.userid = this.user.id;
          this.chatList.load_chat_users(this.user.id).subscribe((data)=>{
            this.chatList.users = data;
            this.chatList.active_user = data[0];
            this.chatServ.getMessages(data[0].id,this.userid);
          });
      });
  }

  

}