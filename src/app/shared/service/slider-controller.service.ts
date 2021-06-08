import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SliderViewComponent } from 'src/app/core-ui/slider-view/slider-view.component';

@Injectable()
export class SliderControllerService {
  //#region Properties

  //#endregion

  //#region Constructor

  public constructor(private modelService: NzModalService) {}

  //#endregion

  //#region Methods

  // Open slider controller
  public openSliderView(): void {
    this.modelService.create({
      nzContent: SliderViewComponent,
      nzTitle: undefined,
      nzFooter: null,
      nzBodyStyle: {
        padding: '0px',
      },
      nzStyle: {
        height: '100%',
      },
      nzClassName: 'slider-dialog',
      nzWrapClassName: 'slider-dialog-wrapper',
    });
  }
  //#endregion
}
