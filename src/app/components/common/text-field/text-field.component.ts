import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css'
})
export class TextFieldComponent {
  @Input() label: string = '';

  @Input() required: boolean = false

  @Input() error?: boolean = false;

}
