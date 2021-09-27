import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserListService {

  active_user:any={
    name:'...',
    mobile:'...',
    id:''
  };
  private _chatListURL = 'https://sendsafe.com.au/testdev/chat_web/chat_list';
  active_user_id:number=1;
  users:any = [];
  
  constructor(private _http:HttpClient) {
  }

  get_users(){
    return this.users;
  }

  load_chat_users(membid){
    let httpheaders = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    let pdata = {'membid':membid};
    return this._http.post(this._chatListURL,pdata,{headers:httpheaders});
  }

  set_user_chat(uid){
    this.active_user = this.users[uid];
  }


}