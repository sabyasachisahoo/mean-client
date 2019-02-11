import { Message } from './../../models/message.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Conversation } from '../../models/conversation.model';

@Injectable()
export class ChatService {
    conversations: Message[] = []
    // messages:Message[] = []
    // conversation:Conversation

    rootUrl = 'http://localhost:3000/api/chat';

    constructor(private http: HttpClient) {
    }
    public getMessages(){
        const newtoken = JSON.parse(localStorage.getItem('TOKEN_NAME'));
        const headers = new HttpHeaders({'x-access-token': newtoken.token});
        return this.http.get<Message[]>(this.rootUrl + '/messages', { headers: headers });
        // return this.http.get<Message[]>(this.rootUrl + '/messages', { headers: headers }).pipe(
        //         map(msg => {
        //             this.messages = msg
        //         }
        //         ))
    }

    public getConversations(conversationId){
        const newtoken = JSON.parse(localStorage.getItem('TOKEN_NAME'));
        const headers = new HttpHeaders({'x-access-token': newtoken.token});
        // return this.http.get<Message[]>(this.rootUrl + '/message/'+conversationId, { headers: headers });
        return this.http.get<Message[]>(this.rootUrl + '/message/' + conversationId, { headers: headers }).pipe(
            map(conv => {
                this.conversations = conv;
            }
            ))
    }

    // reply(conversationId,composedMessage){
    //     let newtoken = JSON.parse(localStorage.getItem('TOKEN_NAME'));
    //     let headers = new HttpHeaders({'x-access-token': newtoken.token});
    //     this.socket.emit('new-message', composedMessage);
    //      return this.http.post(this.sendUrl + '/reply/'+conversationId, { headers: headers})



    //     return this.http.post(this.sendUrl + '/reply/'+conversationId, { headers: headers}).pipe(
    //    map(user => {
    //             if (user) {
    //                 this.socket.emit('new-message', composedMessage);
    //                 console.log(user)
    //    }
    //    }))
    }

