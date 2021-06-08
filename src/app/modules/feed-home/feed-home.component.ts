import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  OnDestroy,
} from '@angular/core';
import { SectionTemplateModel } from 'src/app/shared/models/section-template.model';
import { NavbarControllerService } from 'src/app/shared/service/navbar-controller.service';

@Component({
  selector: 'app-feed-home',
  templateUrl: './feed-home.component.html',
  styleUrls: ['./feed-home.component.scss'],
})
export class FeedHomeComponent implements OnInit, AfterViewInit, OnDestroy {
  //#region Properties

  // Right side template
  @ViewChild('rightSideTemplate')
  public rightSideTemplate: TemplateRef<any>;

  // Middle side template
  @ViewChild('middleSideTemplate')
  public middleSideTemplate: TemplateRef<any>;

  // Tabs section title
  public tabSectionsTitle: string[] = ['Active', 'Feed'];
  //#endregion

  //#region Constructor
  public constructor(
    protected navbarControllerService: NavbarControllerService
  ) {}
  //#endregion

  //#region Methods

  // Trigger when component inits
  public ngOnInit(): void {}

  // Trigger when view inits
  public ngAfterViewInit(): void {
    const rightSideOverrider: SectionTemplateModel = {
      title: 'right',
      template: this.rightSideTemplate,
    };

    const middleSideOverrider: SectionTemplateModel = {
      title: 'middle',
      template: this.middleSideTemplate,
    };

    this.navbarControllerService.updateSectionTemplate(rightSideOverrider);
    this.navbarControllerService.updateSectionTemplate(middleSideOverrider);
  }

  // Trigger when component destroys
  public ngOnDestroy(): void {
    this.navbarControllerService.resetSectionTemplate();
  }
  //#endregion
}
