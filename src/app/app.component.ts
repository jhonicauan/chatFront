import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectChatComponent } from './select-chat/select-chat.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import chatvalues from "../assets/data/chats.json";
import { chatBoxModel } from './interfaces/chatBoxModel';
import { messageModel } from './interfaces/messageModel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SelectChatComponent,ChatAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  chatId:number = 1;
  allChats:chatBoxModel[] = chatvalues;

  setChatId(chatId:number){
    this.chatId = chatId;
  }

  setChat():messageModel[]{
    return this.allChats[this.chatId-1].messages;
  }

  setName():string{
    if(this.chatId == 0){
      return '';
    }else{
      return this.allChats[this.chatId-1].name;
    }
  }

    setPhoto():string{
    if(this.chatId == 0){
      return '';
    }else{
      return this.allChats[this.chatId-1].photo;
    }
  }
}
