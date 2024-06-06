import { Component, Input, input } from '@angular/core';
import { CardComponent } from '../../common/card/card.component';
import { Uc } from '../../../interfaces/uc';

@Component({
  selector: 'app-uc-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './uc-list.component.html',
  styleUrl: './uc-list.component.css'
})
export class UcListComponent {
  @Input() ucList: Array<Uc> = []
  // ucList = input<Uc[]>([])
}
