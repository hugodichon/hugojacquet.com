import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
    declarations: [AppHeaderComponent, MainMenuComponent],
    exports: [AppHeaderComponent, MainMenuComponent],
})
export class AppCommonModule {}