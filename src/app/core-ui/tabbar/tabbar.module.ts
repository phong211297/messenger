import { NzIconModule } from 'ng-zorro-antd/icon';
import { TabbarComponent } from './tabbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TabbarComponent],
  imports: [CommonModule, NzIconModule],
  exports: [TabbarComponent],
})
export class TabbarModule {}
