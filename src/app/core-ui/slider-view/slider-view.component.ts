import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-view',
  templateUrl: './slider-view.component.html',
  styleUrls: ['./slider-view.component.scss'],
})
export class SliderViewComponent implements OnInit {
  //#region Properties

  public array = [1, 2, 3, 4];

  //#endregion

  //#region Constructor
  public constructor() {}

  //#endregion

  //#region Methods

  // Trigger when component intis
  public ngOnInit(): void {}

  //#endregion
}
