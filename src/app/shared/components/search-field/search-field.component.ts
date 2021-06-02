import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  //#region Properties

  // Output search value
  @Output() voted = new EventEmitter<string>();

  // Search input value
  public inputValue?: string;

  // Autocomplete search options
  public options: Array<{ value: string; category: string; count: number }> =
    [];

  //#endregion

  //#region Constructor
  public constructor() {}
  //#endregion

  //#region Methods
  public ngOnInit(): void {}

  // Trigger on search change
  public onSearchChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.options = new Array(this.getRandomInt(5, 15))
      .join('.')
      .split('.')
      .map((_item, idx) => ({
        value,
        category: `${value}${idx}`,
        count: this.getRandomInt(200, 100),
      }));
  }

  private getRandomInt(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Trigger enter search
  public triggerSearch(): void {
    this.voted.emit(this.inputValue);
  }
  //#endregion
}
