import { SectionTemplateModel } from './../models/section-template.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavbarControllerService {
  //#region Properties

  // Navbar subject template
  private _navbarTemplateSubject: BehaviorSubject<any> =
    new BehaviorSubject<any>(null);

  // Navbar holder
  public navbarTemplateHolder = this._navbarTemplateSubject.asObservable();

  //#endregion

  //#region Constructor

  public constructor() {}

  //#endregion

  //#region Methods

  // Update section template
  public updateSectionTemplate(sectionTemplate: SectionTemplateModel): void {
    this._navbarTemplateSubject.next(sectionTemplate);
  }
  //#endregion
}
