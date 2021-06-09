import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderViewComponent } from './slider-view.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [SliderViewComponent],
  imports: [CommonModule, NzCarouselModule, SharedModule, NzModalModule],
  exports: [SliderViewComponent],
})
export class SliderViewModule {}
