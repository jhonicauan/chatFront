import { Component, Input, Output,EventEmitter, HostListener } from '@angular/core';


@Component({
  selector: 'app-chat-box',
  imports: [],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent {
  @Input()id!: number;
  @Input()name!: string;
  @Input()photo!: string;
  @Input()lastMessage!:string;
  @Output() selected = new EventEmitter<number>();

  @HostListener('click')
  sendMessage(){
    this.selected.emit(this.id);
  }

}

