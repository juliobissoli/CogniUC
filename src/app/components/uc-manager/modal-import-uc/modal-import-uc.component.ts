import { Component, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../../common/modal/modal.component';
import { FileHelp } from '../../../utils/fileHellper';
import { Uc, sanitizeUc } from '../../../interfaces/uc';
import { ucFormFields } from '../../../pages/uc-form-page/fields';
import { DefaultService } from '../../../services/default.service';
import { ToastService } from '../../../services/toast/toast.service';

@Component({
  selector: 'app-modal-import-uc',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './modal-import-uc.component.html',
  styleUrl: './modal-import-uc.component.css'
})
export class ModalImportUcComponent {

  constructor(
    private defaultService: DefaultService,
    private toast: ToastService
  ) {}

  @Output() close = new EventEmitter();


  accept = '.csv'

  file: any = undefined

  fileHelper = new FileHelp();

  ucList: Array<any> = []

  entities = ucFormFields.map(el => el.entity)

  handleFile(event: any) {
    const file = event?.target?.files[0];
    if (file) {
      console.log(file)
      this.file = file
      this.fileHelper.decodeCsv2JSON(file).then(
        res => {
          this.ucList = res.map((el: any) => sanitizeUc(el))
        }
      )

    }
  }

  removeFile() {
    this.file = undefined
  }

  onSave() {
    this.defaultService.createMany(this.ucList)
    this.toast.show('UCs importadas com sucesso')
    this.close.emit()
  }
}
