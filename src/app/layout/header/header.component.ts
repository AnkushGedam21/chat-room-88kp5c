import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  app_title:string;
  constructor(public userServ:UserService) { }

  ngOnInit() {
    this.app_title = 'Chat Room';
  }

}