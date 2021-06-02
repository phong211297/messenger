import { SectionTemplateModel } from './../../shared/models/section-template.model';
import { NavbarControllerService } from './../../shared/service/navbar-controller.service';
import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
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

  // Subscription
  private _subscription: Subscription;

  //#endregion

  //#region Constructor

  public constructor(
    protected navbarControllerService: NavbarControllerService
  ) {}

  //#endregion

  //#region Methods

  // Trigger when component inits
  public ngOnInit(): void {
    // Subscription binding
    this._subscription = new Subscription();

    // Update navbar template
    const updateNavbarSubscription =
      this.navbarControllerService.navbarTemplateHolder.subscribe(
        (sectionTemplate: SectionTemplateModel) => {
          this.updateSectionTemplate(sectionTemplate);
        }
      );

    this._subscription.add(updateNavbarSubscription);
  }

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
  public updateSectionTemplate(sectionTemplate: SectionTemplateModel): void {
    if (
      !sectionTemplate ||
      !sectionTemplate.title ||
      !sectionTemplate.template
    ) {
      return;
    }
    
    switch (sectionTemplate.title) {
      case 'left':
        this.setLeftTemplateRef(sectionTemplate.template);
        break;

      case 'middle':
        this.setMiddleTemplateRef(sectionTemplate.template);
        break;

      case 'right':
        this.setRightTemplateRef(sectionTemplate.template);
        break;
    }

    return;
  }

  // Trigger when component destroys
  public ngOnDestroy(): void {
    if (this._subscription && !this._subscription.closed) {
      this._subscription.unsubscribe();
    }
  }
  //#endregion
}
