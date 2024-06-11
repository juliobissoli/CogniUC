import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  isShow: Subject<boolean> = new Subject()

  text: string = 'aqui'

  variant: 'default' | 'danger' = 'default'


  constructor() { }

  show = (text: string, variant: 'default' | 'danger' = 'default') => {

    this.text = text;

    this.variant = variant;

    this.isShow.next(true)

    setTimeout(() => {
      this.isShow.next(false)
    }, 3000)
  }
}
