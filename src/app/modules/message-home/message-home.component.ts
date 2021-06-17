import { Component, OnInit } from '@angular/core';
import { NavbarControllerService } from 'src/app/shared/service/navbar-controller.service';

@Component({
  selector: 'app-message-home',
  templateUrl: './message-home.component.html',
  styleUrls: ['./message-home.component.scss'],
})
export class MessageHomeComponent implements OnInit {
  //#region Properties

  // Is search input focused
  public isSearchFocused: boolean;

  //#endregion

  //#region Constructor

  //#endregion
  public constructor(
    protected navbarControllerService: NavbarControllerService
  ) {}

  //#region Methods

  // Trigger when component inits
  public ngOnInit(): void {}

  // Trigger search keyword
  public searchKeyword(keyword: string): void {
    console.log(keyword);
  }

  // Trigger search focused
  public triggerSearchFocused(isFocused: boolean): void {
    this.isSearchFocused = isFocused;

    this.navbarControllerService.hideNavigationBar(isFocused);
    return;
  }

  //#endregion
}
