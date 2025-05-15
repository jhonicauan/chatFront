import { Component, EventEmitter, Output } from '@angular/core';
import { chatBoxModel } from '../interfaces/chatBoxModel';
import { ChatBoxComponent } from '../chat-box/chat-box.component';
import { CommonModule } from '@angular/common';
import chatsvalues from "../../assets/data/chats.json";

@Component({
  selector: 'app-select-chat',
  imports: [ChatBoxComponent,CommonModule],
  templateUrl: './select-chat.component.html',
  styleUrl: './select-chat.component.css'
})
export class SelectChatComponent {
  chats: chatBoxModel[] =  chatsvalues;
   @Output() chatSelected = new EventEmitter<number>
   sendChatSelected(chatId:number){
    this.chatSelected.emit(chatId);
   }
}
