import { Message } from './../../../models/message.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
conversations: any;
composedMessage: any = ''; // msg array
nestedConv: any;
getConv: any;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
   this.chatService.getMessages();
    // this.chatService.getConversations(conv)
  }

onSelectConv(conversationId) {
  this.chatService.getConversations(conversationId).subscribe(message  => {
          this.getConv = message;
        },
        error => {
          console.log(error);
       });

}
// getMessages(conversationId){
//   this.sendReply = true;
//   this.chatService.getConversations(conversationId).subscribe(message  => 
//       {
//         this.getConv = message;
//       },
//     error =>{
//       console.log(error)
//     })
// }

// reply(conversationId){
//   this.chatService.reply(conversationId,this.composedMessage).subscribe(message =>
//   {
//     console.log(message)
//     this.replyMsg = message;
//     if(message){
//      this.getMessages(conversationId);
//     }
//   },
// error =>{
//   console.log(error)
// })
// }

  }


