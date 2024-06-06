import { Component } from '@angular/core';
import { UcStatisticsComponent } from '../../components/uc-manager/uc-statistics/uc-statistics.component';
import { UcListComponent } from '../../components/uc-manager/uc-list/uc-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-uc-manager-page',
  standalone: true,
  imports: [RouterModule, UcStatisticsComponent, UcListComponent],
  templateUrl: './uc-manager-page.component.html',
  styleUrl: './uc-manager-page.component.css'
})
export class UcManagerPageComponent {

  statistics = 0
}
