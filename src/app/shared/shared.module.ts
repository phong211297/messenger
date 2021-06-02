import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [SearchFieldComponent],
  imports: [
    CommonModule,
    NzAutocompleteModule,
    NzInputModule,
    FormsModule,
    NzIconModule,
    NzButtonModule,
  ],
  exports: [SearchFieldComponent],
})
export class SharedModule {}
