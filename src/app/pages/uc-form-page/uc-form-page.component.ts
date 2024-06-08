import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { TextFieldComponent } from '../../components/common/text-field/text-field.component';
import { ucFormFields } from './fields';
import { DefaultService } from '../../services/default.service';
import { Uc, sanitizeUc } from '../../interfaces/uc';
import { filterDigits, maskCnpj, maskCpf } from '../../utils/formatter';

@Component({
  selector: 'app-uc-form-page',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, TextFieldComponent],
  templateUrl: './uc-form-page.component.html',
  styleUrl: './uc-form-page.component.css'
})
export class UcFormPageComponent {

  t: Uc[] = [];

  isLoading: boolean = false
  constructor(private ucService: DefaultService) {
    console.log(this.ucService.listItems)
    this.ucService.listUcs.subscribe(
      res => {
        this.t = res
      }
    )
  }

  profileForm = new FormGroup({
    dateInit: new FormControl('', [Validators.required]),
    concessionaire: new FormControl('', [Validators.required]),
    uf: new FormControl('', [Validators.required]),
    numInstallation: new FormControl('', [Validators.required]),
    numClient: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    unitDescription: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    modality: new FormControl('', [Validators.required]),
    isRural: new FormControl('', [Validators.required]),
    orgType: new FormControl('', [Validators.required]),
    licenseType: new FormControl('', [Validators.required]),
    personCode: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })


  lines = [0, 1, 2, 3, 4]


  onSave() {
    const data: Uc = sanitizeUc(this.profileForm.value)

    this.isLoading = true
    this.ucService.add(data).then(
      res => {
        this.profileForm.reset();
        this.isLoading = false
      },
      () => { this.isLoading = false },
    )


  }


  formInfo = ucFormFields

  passwordInputType: 'password' | 'text' = 'password';

  iconsPassword: 'icon-visibility-off' | 'icon-visibility' = 'icon-visibility-off'

  toggleVisibilityPass() {
    this.passwordInputType = this.passwordInputType === 'password' ? 'text' : 'password'
    this.iconsPassword = this.passwordInputType === 'password' ? 'icon-visibility-off' : 'icon-visibility'


    // console.log('bateu aqui')
  }


  handleMask(event: any, entity: string) {
    if(entity === 'numInstallation' || entity === 'numClient') {
      const digits = filterDigits(20, event.target.value)
      event.target.value = digits
    }
    if (entity === 'personCode') {

      let newStr = ''
      if (event.target.value.length > 14) {
        newStr = maskCnpj(event.target.value)
      }
      else {
        newStr = maskCpf(event.target.value)
      }
      event.target.value = newStr
    }
  }

}
