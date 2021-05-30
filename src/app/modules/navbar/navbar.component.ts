import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  //#region Properties

  // Left template ref
  private _leftTemplateRef: TemplateRef<any>;

  public get leftTemplateRef(): TemplateRef<any> {
    return this._leftTemplateRef;
  }

  public setLeftTemplateRef(templateRef: TemplateRef<any>) {
    this._leftTemplateRef = templateRef;
  }

  // Right template ref
  private _rightTemplateRef: TemplateRef<any>;

  public get rightTemplateRef(): TemplateRef<any> {
    return this._rightTemplateRef;
  }

  public setRightTemplateRef(templateRef: TemplateRef<any>) {
    this._rightTemplateRef = templateRef;
  }

  // Middle template ref
  private _middleTemplateRef: TemplateRef<any>;

  public get middleTemplateRef(): TemplateRef<any> {
    return this._middleTemplateRef;
  }

  public setMiddleTemplateRef(templateRef: TemplateRef<any>) {
    this._middleTemplateRef = templateRef;
  }

  //#endregion

  //#region Constructor

  public constructor() {}

  //#endregion

  //#region Methods

  // Trigger when component inits
  public ngOnInit(): void {}

  // Get section template
  public getSectionTemplate(position: string): TemplateRef<any> | undefined {
    let selectedTemplateRef: TemplateRef<any> | undefined;

    switch (position) {
      case 'left':
        selectedTemplateRef = this.leftTemplateRef;
        break;

      case 'middle':
        selectedTemplateRef = this.middleTemplateRef;
        break;

      case 'right':
        selectedTemplateRef = this.rightTemplateRef;
        break;
    }

    return selectedTemplateRef;
  }

  // Update section template
  public updateSectionTemplate(
    position: string,
    template: TemplateRef<any>
  ): void {
    switch (position) {
      case 'left':
        this.setLeftTemplateRef(template);
        break;

      case 'middle':
        this.setMiddleTemplateRef(template);
        break;

      case 'right':
        this.setRightTemplateRef(template);
        break;
    }

    return;
  }
  //#endregion
}
