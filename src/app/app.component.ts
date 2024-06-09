import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './components/common/main-menu/main-menu.component';
import { MainHeaderComponent } from './components/common/main-header/main-header.component';
import { ToastService } from './services/toast/toast.service';
import { ToastComponent } from './components/toast/toast.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainMenuComponent, MainHeaderComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'cogni-uc';
}
