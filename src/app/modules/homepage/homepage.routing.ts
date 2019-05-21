import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';

export const HomepageRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'feature-one-component'
    },
    {
        path: 'feature-one-component',
        component: HomepageComponent,
        // canActivate: [HomepageComponentCanActivateGuard]
    }
];
