import { FeedHomeRoutingModule } from './feed-home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedHomeComponent } from './feed-home.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@NgModule({
  declarations: [FeedHomeComponent],
  imports: [CommonModule, FeedHomeRoutingModule, NzTabsModule],
})
export class FeedHomeModule {}
