import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-uc-form-page',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, TextFieldComponent],
  templateUrl: './uc-form-page.component.html',
  styleUrl: './uc-form-page.component.css'
})
export class UcFormPageComponent {

  ucId: string | undefined = undefined;

  isLoading: boolean = false
  constructor(
    private ucService: DefaultService,
    private toast: ToastService,
    private route: ActivatedRoute,
    private router: Router,

  ) {

    this.route.params.subscribe(
      params => {
        console.log(params)

        if (params && params['id']) {
          this.ucId = params['id']
          this.handleGetUc(params['id'])
        }
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

  async handleGetUc(id: string) {
    const uc = await this.ucService.show(id)

    if (uc) {
      const strEntities: Array<string> = [
        // 'dateInit',
        // 'isRural',
        'concessionaire',
        'uf',
        'numInstallation',
        'numClient',
        'company',
        'unitDescription',
        'type',
        'modality',
        'orgType',
        'licenseType',
        'personCode',
        'email',
        'password']

        strEntities.forEach((entity: string) => {

          this.profileForm.get(entity)?.setValue((uc as any)[entity].toString());
        });
      this.profileForm.get('isRural')?.setValue(uc.isRural ? 'Sim' : 'Não');
      this.profileForm.get('dateInit')?.setValue(new Date(uc.dateInit).toISOString().slice(0, 10));

    }
  }



  lines = [0, 1, 2, 3, 4]


  onSave() {
    const data: Uc = sanitizeUc(this.profileForm.value)

    this.isLoading = true


    this.ucService.save(data, this.ucId).then(
      () => {
        this.profileForm.reset();
        this.isLoading = false
        this.router.navigate(['/uc'])
        this.toast.show('Uc salvo com sucesso')
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
  }


  handleMask(event: any, entity: string) {
    if (entity === 'numInstallation' || entity === 'numClient') {
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
