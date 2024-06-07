import { Component } from '@angular/core';
import { UcStatisticsComponent } from '../../components/uc-manager/uc-statistics/uc-statistics.component';
import { UcListComponent } from '../../components/uc-manager/uc-list/uc-list.component';
import { RouterModule } from '@angular/router';
import { DefaultService } from '../../services/default.service';
import { Uc } from '../../interfaces/uc';

@Component({
  selector: 'app-uc-manager-page',
  standalone: true,
  imports: [RouterModule, UcStatisticsComponent, UcListComponent],
  templateUrl: './uc-manager-page.component.html',
  styleUrl: './uc-manager-page.component.css'
})
export class UcManagerPageComponent{
  list: Array<Uc> = [];
  constructor(private ucService: DefaultService) {
    console.log(this.ucService.listItems)
    this.ucService.listUcs.subscribe(
      res =>{ 
        this.list = res
        console.log()
      } 
      
    );
  }


  ngOnInit() {
    this.ucService.load()
  }
  
}
