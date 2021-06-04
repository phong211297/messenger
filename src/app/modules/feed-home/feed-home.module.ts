import { FeedHomeRoutingModule } from './feed-home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedHomeComponent } from './feed-home.component';

@NgModule({
  declarations: [FeedHomeComponent],
  imports: [CommonModule, FeedHomeRoutingModule],
})
export class FeedHomeModule {}
