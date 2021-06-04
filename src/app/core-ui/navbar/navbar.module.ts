import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NzIconModule,
    NzButtonModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
