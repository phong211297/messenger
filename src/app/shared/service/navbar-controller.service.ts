import { SectionTemplateModel } from './../models/section-template.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavbarControllerService {
  //#region Properties

  // Navbar subject template
  private _navbarTemplateSubject: BehaviorSubject<any> =
    new BehaviorSubject<any>(null);

  // Navbar subject display
  private _navbarDisplaySubject: BehaviorSubject<any> =
    new BehaviorSubject<any>(null);

  // Navbar template holder
  public navbarTemplateHolder = this._navbarTemplateSubject.asObservable();

  // Navbar display holder
  public navbarDisplayHolder = this._navbarTemplateSubject.asObservable();
  //#endregion

  //#region Constructor

  public constructor() {}

  //#endregion

  //#region Methods

  // Update section template
  public updateSectionTemplate(sectionTemplate: SectionTemplateModel): void {
    this._navbarTemplateSubject.next(sectionTemplate);
  }

  // Update navigation display
  public hideNavigationBar(shouldNavHide: boolean): void {
    this._navbarTemplateSubject.next(shouldNavHide);
  }

  // Reset section template
  public resetSectionTemplate(): void {
    this._navbarTemplateSubject.next({ title: 'left', template: null });
    this._navbarTemplateSubject.next({ title: 'middle', template: null });
    this._navbarTemplateSubject.next({ title: 'right', template: null });

    this._navbarDisplaySubject.next(false);
  }
  //#endregion
}
