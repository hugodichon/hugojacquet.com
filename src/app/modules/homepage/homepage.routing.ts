import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';

export const HomepageRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomepageComponent,
        // canActivate: [HomepageComponentCanActivateGuard]
    },
];
