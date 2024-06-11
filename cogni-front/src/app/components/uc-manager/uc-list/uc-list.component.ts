import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { CardComponent } from '../../common/card/card.component';
import { Uc } from '../../../interfaces/uc';


export interface ActionListUc {
  action: 'edit' | 'delete' | 'settings';
  uc: Uc
}


@Component({
  selector: 'app-uc-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './uc-list.component.html',
  styleUrl: './uc-list.component.css'
})
export class UcListComponent {
  @Input() ucList: Array<Uc> = []

  @Output() actionsClick = new EventEmitter<ActionListUc>();

  @Output() downloadExample = new EventEmitter<any>();
  // ucList = input<Uc[]>([])
}
