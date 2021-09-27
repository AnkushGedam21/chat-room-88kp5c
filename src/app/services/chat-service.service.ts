import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChatServiceService {
  
   private _messageURL = 'https://sendsafe.com.au/testdev/chat_web/get_messages'; 
   private _send_messageURL = 'https://sendsafe.com.au/testdev/chat_web/send_message';
 private _newMsgURL = 'https://sendsafe.com.au/testdev/chat_web/new_messages';
  private messages:any=[];
  constructor(public http:HttpClient) {
   }

    
  getMessages(userid,membid) {
    let httpheaders = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
  let pdata = {'userid':userid,'membid':membid};
    this.http.post(this._messageURL,pdata,{headers:httpheaders})
    .subscribe((data)=>{
        this.messages = data;
        let newMsgIntrvl;
        clearInterval(newMsgIntrvl);
         newMsgIntrvl = setInterval(()=>{
            this.load_new_msg(membid,this.messages[this.messages.length-1].created);
            
          },25000);
      });
  }

  put_message(msg){
    this.messages.push(msg);
      let httpheaders = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
      this.http.post(this._send_messageURL,msg,{headers:httpheaders})
      .subscribe((data)=>{
        });
  }

  load_new_msg(memberid,last_msg){
    let httpheaders = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
      let pdata = {'membid':memberid,"last_msg":last_msg};
      this.http.post(this._newMsgURL,pdata,{headers:httpheaders})
      .subscribe((data)=>{
        console.log(data);
         // this.messages = data;
          this.messages = this.messages.concat(data);
        });
   }

}