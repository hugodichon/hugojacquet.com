import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';
import { HomepageRoutes } from './homepage.routing';

@NgModule({
    declarations: [HomepageComponent],
    imports: [RouterModule.forChild(HomepageRoutes)],
    providers: [],
})
export class HomepageModule {

}
