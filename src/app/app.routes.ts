import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: './modules/homepage/homepage.module#HomepageModule'
    }
    // { path: '**', component: NoPageComponent },
];
