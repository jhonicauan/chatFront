import { CommonModule } from '@angular/common';
import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-chat-info',
  imports: [CommonModule],
  templateUrl: './chat-info.component.html',
  styleUrl: './chat-info.component.css'
})
export class ChatInfoComponent {
  @Input() photo!: string;
  @Input() name!: string;
}
