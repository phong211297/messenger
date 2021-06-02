import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchFieldComponent],
  imports: [CommonModule, NzInputModule, NzAutocompleteModule, FormsModule],
})
export class SharedModule {}
