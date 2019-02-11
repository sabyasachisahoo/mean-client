import { ChatService } from 'src/app/shared/services/chat.service';
import { Message } from './../../../models/message.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {

  @Input() getConv: Message[];
  // getConv:any
  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

//   onSelectConv(conversationId){

//   this.chatService.getConversations(conversationId).subscribe(message  => 
//       {
//         this.getConv = message;
//       },
//     error =>{
//       console.log(error)
//     })
// }


}
