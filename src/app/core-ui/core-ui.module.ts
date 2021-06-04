import { TabbarModule } from './tabbar/tabbar.module';
import { NgModule } from '@angular/core';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  imports: [NavbarModule, TabbarModule],
  exports: [NavbarModule, TabbarModule],
})
export class CoreUIModule {}
