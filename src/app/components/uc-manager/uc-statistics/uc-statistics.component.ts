import {
  Component,
  Input
} from '@angular/core';
import { CardComponent } from '../../common/card/card.component';
import { Uc } from '../../../interfaces/uc';

@Component({
  selector: 'app-uc-statistics',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './uc-statistics.component.html',
  styleUrl: './uc-statistics.component.css'
})
export class UcStatisticsComponent {

  @Input() ucList: Array<Uc> = []

  totalUcs = 0;
  totalActives = 0;
  totalConsumer = 0;
  totalGroupA = 0;
  withAddress = 0;
  withPersonIn = 0;

  statisticsData = {
    total: {
      allValues: undefined,
      onlyValue: this.totalUcs,
      entity: 'total',
      value: undefined,
      class: 'lg:w-1/6',
      label: "Total UCs"
    },
    status: {
      allValues: [
        { label: 'Ativos', value: 0 },
        { label: 'Inativos', value: 0 },
      ],
      entity: 'status',
      value: undefined,
      class: 'lg:w-1/6',
      label: "Status"
    },
    type: {
      allValues: [
        { label: 'Comsumidor', value: 0 },
        { label: 'Gerador', value: 0 },
      ],
      entity: 'type',
      value: undefined,
      class: 'lg:w-1/6',
      label: "Tipo"
    },
    group: {
      allValues: [
        { label: 'Grupo A', value: 0 },
        { label: 'Grupo B', value: 0 },
      ],
      entity: 'group',
      value: undefined,
      class: 'lg:w-1/6',
      label: "Grupo"
    },
    balance: {
      allValues: [
        { label: 'Com endereço', value: 0 },
        { label: 'Com endereço', value: 0 },
        { label: 'Com CPF/CNPJ', value: 0 },
        { label: 'SEM CPF/CNPJ', value: 0 },
      ],
      entity: 'balance',
      value: undefined,
      class: 'lg:w-2/6',
      label: "Dados de faturamento"
    },
  }

  get listStatistics() {
    return Object.values(this.statisticsData)
  }

  ngOnChanges() {
    if (this.ucList.length > 0) {
      this.mountStatistics()
    }
  }

  mountStatistics() {
    this.totalUcs = this.ucList.length;
    this.totalActives = this.ucList.filter(el => el.active).length
    this.totalConsumer = this.ucList.filter(el => el.type === 'Consumidor').length
    this.totalGroupA = this.ucList.filter(el => el.modality.toUpperCase().includes('A')).length
    this.withAddress = this.ucList.filter(el => el.company).length
    this.withPersonIn = this.ucList.filter(el => el.personCode).length

    this.statisticsData.total.onlyValue = this.totalUcs

    this.statisticsData.status.allValues = [
      { label: 'Ativos', value: this.totalActives },
      { label: 'Inativos', value: this.totalUcs - this.totalActives },
    ]


      this.statisticsData.type.allValues = [
        { label: 'Comsumidor', value: this.totalConsumer },
        { label: 'Gerador', value: this.totalUcs - this.totalConsumer },
      ]


      this.statisticsData.group.allValues = [
        { label: 'Grupo A', value: this.totalGroupA },
        { label: 'Grupo B', value: this.totalUcs - this.totalGroupA },
      ]

      this.statisticsData.balance.allValues = [
        { label: 'Com endereço', value: this.withAddress },
        { label: 'Com endereço', value: this.totalUcs - this.withAddress },
        { label: 'Com CPF/CNPJ', value: this.withPersonIn },
        { label: 'SEM CPF/CNPJ', value: this.totalUcs - this.withPersonIn },
      ]


  }
}
