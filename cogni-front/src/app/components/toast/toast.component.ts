import { Component } from '@angular/core';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {

  isShow: boolean = false;

  text: string = 'aqui'

  isDanger: boolean = false

  constructor(private toastService: ToastService) {
    toastService.isShow.subscribe(
      res => {
        this.isShow = res;
        this.text = this.toastService.text;
        this.isDanger = this.toastService.variant === 'danger';

      }
    )
  }
}
