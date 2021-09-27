import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { LayoutComponent } from './layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ChatServiceService } from '../services/chat-service.service';
import { UserListService } from '../services/user-list.service';
import { UserService } from '../services/user.service';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [HeaderComponent,LayoutComponent,ChatRoomComponent, SendMessageComponent, SidebarComponent,LoginComponent],
  exports:[HeaderComponent,LayoutComponent,ChatRoomComponent],
  providers:[ChatServiceService,UserListService,UserService]
})
export class LayoutModule {

 }