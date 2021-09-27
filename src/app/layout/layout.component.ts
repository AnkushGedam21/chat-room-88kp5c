import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  userAuthenticated: boolean = true;
  constructor(public userServ: UserService) {}

  ngOnInit() {}
}
