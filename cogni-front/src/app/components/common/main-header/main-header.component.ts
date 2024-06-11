import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AvatarComponent } from '../avatar/avatar.component';


interface RouterInfo {
  path: string,
  title: string;
  subtitle: string;
  legend: string;
}

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {

  userData = {
    name: 'Ricardo A.',
    role: 'Engenheiro',
    avatarUrl: 'https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }

  defaultRouter:  RouterInfo =  { path: '/', title: 'Home', subtitle: '', legend: '' };

  routerInfo: RouterInfo = this.defaultRouter

  isExpanded: boolean = false

  routers: Array<RouterInfo> = [
    { path: '/', title: 'Home', subtitle: '', legend: '' },
    { path: '/uc', title: 'GESTÃO DE UCs', subtitle: '', legend: '' },
    { path: '/uc/form', title: 'GESTÃO DE UCs', subtitle: ' Cadastro manua', legend: '' },
    { path: '/cicle', title: 'Gestão de ciclos', subtitle: '', legend: '' },
    { path: '/script', title: 'Gestão de rateios', subtitle: '', legend: '' },
    { path: '/balance', title: 'Gestão de faturamento', subtitle: '', legend: '' },
    { path: '/settings', title: 'Configurações', subtitle: '', legend: '' },
  ]

  routersInfoMap: Map<string, RouterInfo> = new Map(this.routers.map(el => [el.path, el])
  )


  constructor(private router: Router) {
    this.routerInfo = this.routersInfoMap.get(this.router.url) || this.defaultRouter;
  }



  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.routerInfo = this.routersInfoMap.get(this.router.url) || this.defaultRouter;

      }
    });
  }


}
