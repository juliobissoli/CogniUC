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
  ) { }

  @Output() close = new EventEmitter();

  @Output() onSuccess = new EventEmitter();


  accept = '.csv'

  file: any = undefined

  fileHelper = new FileHelp();

  ucList: Array<any> = []

  entities = ucFormFields.map(el => el.entity)

  isLoading: boolean = false;

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
    this.isLoading = true
    this.defaultService.createMany(this.ucList).then(
      () => {
        this.isLoading = false
        this.toast.show('UCs importadas com sucesso')
        this.close.emit()
        this.onSuccess.emit()
      },
      () => {
        console.log('Ta nmo erro')
        this.isLoading = false
        this.toast.show('Erro ao importar as UCs', 'danger')

      }
    )
  }
}
