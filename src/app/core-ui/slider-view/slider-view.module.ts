import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderViewComponent } from './slider-view.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  declarations: [SliderViewComponent],
  imports: [CommonModule, NzCarouselModule],
  exports: [SliderViewComponent],
})
export class SliderViewModule {}
