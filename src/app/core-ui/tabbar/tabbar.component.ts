import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss'],
})
export class TabbarComponent implements OnInit, OnDestroy {
  //#region Properties

  // Create subscription for page
  private _subscription: Subscription;

  // List tab bar items
  public listItems: any[] = [
    {
      title: 'Chat',
      icon: 'message',
      link: '/message',
    },
    {
      title: 'Feed',
      icon: 'team',
      link: '/feed',
    },
  ];

  // Current route path
  public currentPath: string;

  //#endregion

  //#region Constructor
  public constructor(public router: Router, public location: Location) {}

  //#endregion

  //#region Methods

  // Trigger when component inits
  public ngOnInit(): void {
    // Create subscription for page
    this._subscription = new Subscription();

    // Check location path
    const checkLocationPathSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentPath = this.location.path();
      });

    this._subscription.add(checkLocationPathSubscription);
  }

  // Navigate to url
  public navigateTo(link: string) {
    this.router.navigate([link]);
  }

  // Trigger when component destroys
  public ngOnDestroy(): void {
    if (this._subscription && !this._subscription.closed) {
      this._subscription.unsubscribe();
    }
  }

  //#endregion
}
