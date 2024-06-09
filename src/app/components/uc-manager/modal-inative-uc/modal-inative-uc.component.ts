import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../../common/modal/modal.component';
import { TextFieldComponent } from '../../common/text-field/text-field.component';
import { Uc } from '../../../interfaces/uc';
import { FormsModule } from '@angular/forms';
import { DefaultService } from '../../../services/default.service';

@Component({
  selector: 'app-modal-inative-uc',
  standalone: true,
  imports: [ModalComponent, TextFieldComponent, FormsModule],
  templateUrl: './modal-inative-uc.component.html',
  styleUrl: './modal-inative-uc.component.css'
})
export class ModalInativeUcComponent {

  constructor(
    private ucService: DefaultService
  ) {}

  @Input() uc?: Uc;

  @Output() close = new EventEmitter();

  token: string = ''

  onSave() {
    console.log(this.uc)
    if(this.uc) {
      this.ucService.delete(this.uc.id)
      this.close.emit()
    }
  }


}
