import { CommonModule } from '@angular/common';
import { Component, input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-input-message',
  imports: [CommonModule, FormsModule],
  templateUrl: './input-message.component.html',
  styleUrl: './input-message.component.css'
})
export class InputMessageComponent {
  messageBox! :string;
  @Output() message = new EventEmitter<string>;
  sendMessage(text: string){
    if(this.messageBox != ''){
      this.message.emit(text);
      this.messageBox = '';
      
    }
  }
}
