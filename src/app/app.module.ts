import { CoreUIModule } from './core-ui/core-ui.module';
import { SharedModule } from './shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarControllerService } from './shared/service/navbar-controller.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { MessageHomeModule } from './modules/message-home/message-home.module';
import { FeedHomeModule } from './modules/feed-home/feed-home.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzIconModule,
    NzAutocompleteModule,
    NzInputModule,
    CoreUIModule,
    SharedModule,
    MessageHomeModule,
    FeedHomeModule,
    NzTabsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, NavbarControllerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
