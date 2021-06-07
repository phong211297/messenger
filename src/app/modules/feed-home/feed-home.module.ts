import { SharedModule } from './../../shared/shared.module';
import { FeedHomeRoutingModule } from './feed-home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedHomeComponent } from './feed-home.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FeedActiveComponent } from './feed-active/feed-active.component';
import { FeedNewComponent } from './feed-new/feed-new.component';

@NgModule({
  declarations: [FeedHomeComponent, FeedActiveComponent, FeedNewComponent],
  imports: [CommonModule, FeedHomeRoutingModule, NzTabsModule, SharedModule],
})
export class FeedHomeModule {}
