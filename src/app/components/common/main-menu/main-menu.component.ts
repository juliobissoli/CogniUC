import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  currentRouter: string = '';

  constructor(private router: Router) {
    this.currentRouter = this.router.url;
  }



  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRouter = event.url;
      }
    });
  }

  routersBtn = [
    { hasNext: false, path: '/', label: 'Home', icon: 'icon-home' },
    { hasNext: true, path: '/uc', label: 'Gestão de UCs', icon: 'icon-tower' },
    { hasNext: true, path: '/cicle', label: 'Gestão de ciclos', icon: 'icon-calc' },
    { hasNext: true, path: '/script', label: 'Gestão de rateios', icon: 'icon-persons' },
    { hasNext: true, path: '/balance', label: 'Gestão de faturamento', icon: 'icon-money' },
    { hasNext: true, path: '/settings', label: 'Configurações', icon: 'icon-settings' },
  ]




}
