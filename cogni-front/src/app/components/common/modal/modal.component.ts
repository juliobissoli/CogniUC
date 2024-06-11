import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() headerTitle: string = '';

  @Input() width?: string = '';

  @Input() headerSubtitle: string = '';

  @Input() isVisible: boolean = true;

  @Input() translateHeaderTitle: boolean = true;

  @Input() translateHeaderSubtitle: boolean = true;

  @Output() closeModal = new EventEmitter();
}
