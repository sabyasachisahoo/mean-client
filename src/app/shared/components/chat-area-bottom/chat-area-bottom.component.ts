import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-chat-area-bottom',
  templateUrl: './chat-area-bottom.component.html',
  styleUrls: ['./chat-area-bottom.component.css']
})
export class ChatAreaBottomComponent implements OnInit {
 
  @Input() conversationId: string;
  @Output() sendMessage = new EventEmitter<any>();

  messageForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: ['', Validators.required]
    });
  }

  onSendMessage() {
    if (!this.messageForm.valid)  { return; }

    this.sendMessage.emit({ conversationId: this.conversationId, messageContent: this.messageForm.value.message });

    this.messageForm.reset();
  }

}
