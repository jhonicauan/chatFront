import { Component, EventEmitter, Output, Input} from '@angular/core';
import { chatBoxModel } from '../interfaces/chatBoxModel';
import { ChatBoxComponent } from '../chat-box/chat-box.component';
import { CommonModule } from '@angular/common';
import chatsValues from "../../assets/data/chats.json";

@Component({
  selector: 'app-select-chat',
  imports: [ChatBoxComponent,CommonModule],
  templateUrl: './select-chat.component.html',
  styleUrl: './select-chat.component.css'
})
export class SelectChatComponent {
  chats: chatBoxModel[] =  chatsValues;
  @Input() lastMessage!: string; 
  setLastMessage(chat: chatBoxModel){
    let message = chat.messages;
    let length = message.length;
    return message[length-1];
  }
   @Output() chatSelected = new EventEmitter<number>
   sendChatSelected(chatId:number){
    this.chatSelected.emit(chatId);
   }
}
