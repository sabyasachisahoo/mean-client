import { Message } from './../../../models/message.model';
import { Observable } from 'rxjs/Observable';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';
import { Conversation } from '../../../models/conversation.model';


@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  nestedConv: any;
  getConv: any;

  @Input() conversations: Conversation[];
  @Input() conversationId: string;
  @Output() selectConversation = new EventEmitter();

  constructor(private chatService:ChatService) { }

  ngOnInit() {
    this.chatService.getMessages().subscribe(data => {
      this.nestedConv = data;
      },
      error => {
        console.log(error);
      });
  }

  onSelectConv(conversationId) {
    console.log(conversationId);
    this.chatService.getConversations(conversationId).subscribe(message  => {
             this.getConv = message;
            this.selectConversation.emit( this.getConv);
          },
          error => {
            console.log(error);
         });
  }

}
