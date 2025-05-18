import { Component,Input } from '@angular/core';
import { SelectChatComponent } from '../select-chat/select-chat.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [SelectChatComponent,CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
 @Input() text!: string;
 @Input() myMessage!: boolean;
}
