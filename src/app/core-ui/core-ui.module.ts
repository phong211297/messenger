import { SliderViewModule } from './slider-view/slider-view.module';
import { TabbarModule } from './tabbar/tabbar.module';
import { NgModule } from '@angular/core';
import { NavbarModule } from './navbar/navbar.module';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  imports: [
    NavbarModule,
    TabbarModule,
    SliderViewModule,
    NzCarouselModule,
  ],
  exports: [NavbarModule, TabbarModule, SliderViewModule],
})
export class CoreUIModule {}
