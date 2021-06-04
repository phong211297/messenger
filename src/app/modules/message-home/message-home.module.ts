import { MessageHomeRoutingModule } from './message-home-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageHomeComponent } from './message-home.component';

@NgModule({
  declarations: [MessageHomeComponent],
  imports: [CommonModule, SharedModule, MessageHomeRoutingModule],
})
export class MessageHomeModule {}
