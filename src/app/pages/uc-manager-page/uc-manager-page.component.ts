import { Component } from '@angular/core';
import { UcStatisticsComponent } from '../../components/uc-manager/uc-statistics/uc-statistics.component';
import { ActionListUc, UcListComponent } from '../../components/uc-manager/uc-list/uc-list.component';
import { Router, RouterModule } from '@angular/router';
import { DefaultService } from '../../services/default.service';
import { Uc } from '../../interfaces/uc';
import { FileHelp } from '../../utils/fileHellper';
import { fakerUcs } from '../../data/uc.faker';
import { ModalImportUcComponent } from '../../components/uc-manager/modal-import-uc/modal-import-uc.component';
import { ModalInativeUcComponent } from '../../components/uc-manager/modal-inative-uc/modal-inative-uc.component';



@Component({
  selector: 'app-uc-manager-page',
  standalone: true,
  imports: [RouterModule, UcStatisticsComponent, UcListComponent, ModalImportUcComponent, ModalInativeUcComponent],
  templateUrl: './uc-manager-page.component.html',
  styleUrl: './uc-manager-page.component.css'
})
export class UcManagerPageComponent{

  list: Array<Uc> = [];
  
  fileHelp = new FileHelp();

  modalImportIsVisible: boolean = false;

  ucToInative?: Uc;  

  constructor(
    private router: Router,
    private ucService: DefaultService) {
    this.ucService.listUcs.subscribe(
      res =>{ 
        this.list = res
      } 
      
    );
  }

  ngOnInit() {
    this.ucService.load()
  }

  handleAction(data: ActionListUc) {
    if(data.action === 'edit') {
      this.router.navigate([`/uc/form/${data.uc.id}`]);
    }

    if (data.action === 'delete') {
      this.ucToInative = data.uc
    }
  }

  downloadFileExample() {

    const sanitizedUcs = fakerUcs.map(uc => {
      const { id, active, ...sanitizedUc } = uc;
      return sanitizedUc;
    });

    const csvData = this.fileHelp.convertJson2CsvArray(sanitizedUcs);

    if (csvData) {
      const file = new Blob([csvData], { type: 'data:text/csv;charset=utf-8' });

      this.fileHelp.downloadFile(file, 'ucExample.csv');
    }
  }
  
}
