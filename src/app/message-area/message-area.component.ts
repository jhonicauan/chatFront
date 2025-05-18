import { Component,Input } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { CommonModule } from '@angular/common';
import chatValue from '../../assets/data/chats.json';
import { messageModel } from '../interfaces/messageModel';
import { chatBoxModel } from '../interfaces/chatBoxModel';

@Component({
  selector: 'app-message-area',
  imports: [MessageComponent,CommonModule],
  templateUrl: './message-area.component.html',
  styleUrl: './message-area.component.css'
})
export class MessageAreaComponent {
  @Input() id!: number;
  @Input() chatMessages!: messageModel[];
 
  sendMessage(){
    console.log(this.id);
    console.log(this.chatMessages);
  }

}