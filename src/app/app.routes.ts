import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    // { path: '**', component: NoPageComponent },
];