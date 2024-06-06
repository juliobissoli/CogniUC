import { Routes } from '@angular/router';
import { UcManagerPageComponent } from './pages/uc-manager-page/uc-manager-page.component';
import { UcFormPageComponent } from './pages/uc-form-page/uc-form-page.component';

export const routes: Routes = [
    { path: 'uc', component: UcManagerPageComponent },
    { path: 'uc/form', component: UcFormPageComponent },
    { path: 'cicle', component: UcManagerPageComponent },
    { path: 'script', component: UcManagerPageComponent },
    { path: 'balance', component: UcManagerPageComponent },
    { path: 'settings', component: UcManagerPageComponent },

];
