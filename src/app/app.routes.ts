import { Routes } from '@angular/router';
import { UcManagerPageComponent } from './pages/uc-manager-page/uc-manager-page.component';

export const routes: Routes = [
    { path: 'uc', component: UcManagerPageComponent },
    { path: 'cicle', component: UcManagerPageComponent },
    { path: 'script', component: UcManagerPageComponent },
    { path: 'balance', component: UcManagerPageComponent },
    { path: 'settings', component: UcManagerPageComponent },

];
