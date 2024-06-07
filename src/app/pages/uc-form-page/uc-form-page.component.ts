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

@Component({
  selector: 'app-uc-form-page',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, TextFieldComponent],
  templateUrl: './uc-form-page.component.html',
  styleUrl: './uc-form-page.component.css'
})
export class UcFormPageComponent {

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
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })


  lines = [0, 1, 2, 3, 4]


  onSave() {
    console.log(this.profileForm.get('dateInit')?.valid)
    console.log(this.profileForm.get('dateInit')?.pristine)
  }


  formInfo = ucFormFields

}
