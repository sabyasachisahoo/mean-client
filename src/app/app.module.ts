import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ChatComponent } from './shared/components/chat/chat.component';

import { AuthGuardService } from './core/authentication/auth-guard.service';
import { AuthenticationService } from './core/authentication/authentication.service';
import { UserService } from './shared/services/user.service';
import { ChatService } from './shared/services/chat.service';

import { ReversePipe } from './shared/pipes/reverse.pipe';
import { ChatMessagesComponent } from './shared/components/chat-messages/chat-messages.component';
import { ChatAreaBottomComponent } from './shared/components/chat-area-bottom/chat-area-bottom.component';
import { ChatListComponent } from './shared/components/chat-list/chat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    ReversePipe,
    ChatMessagesComponent,
    ChatAreaBottomComponent,
    ChatListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    UserService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
