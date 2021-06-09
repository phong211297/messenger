import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

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
  public constructor(private modalService: NzModalService) {}

  //#endregion

  //#region Methods

  // Trigger when component intis
  public ngOnInit(): void {}

  // Close dialog
  public closeDialog(): void {
    this.modalService.closeAll();

    return;
  }
  //#endregion
}
