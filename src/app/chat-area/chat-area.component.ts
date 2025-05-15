import { Component, Input } from '@angular/core';
import { ChatInfoComponent } from '../chat-info/chat-info.component';
import { MessageAreaComponent } from '../message-area/message-area.component';
import { InputMessageComponent } from '../input-message/input-message.component';

@Component({
  selector: 'app-chat-area',
  imports: [ChatInfoComponent,MessageAreaComponent,InputMessageComponent],
  templateUrl: './chat-area.component.html',
  styleUrl: './chat-area.component.css'
})
export class ChatAreaComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() photo!: string;
}
