import { Component } from '@angular/core';
import { CardComponent } from '../../common/card/card.component';

@Component({
  selector: 'app-uc-statistics',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './uc-statistics.component.html',
  styleUrl: './uc-statistics.component.css'
})
export class UcStatisticsComponent {

  statisticsData = [
    { value: undefined, class: 'lg:w-1/6', label: "Total UCs" },
    { value: undefined, class: 'lg:w-1/6', label: "Status" },
    { value: undefined, class: 'lg:w-1/6', label: "Tipo" },
    { value: undefined, class: 'lg:w-1/6', label: "Grupo" },
    { value: undefined, class: 'lg:w-2/6', label: "Dados de faturamento" },
  ]
}
