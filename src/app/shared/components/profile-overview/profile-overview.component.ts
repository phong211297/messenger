import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.scss'],
})
export class ProfileOverviewComponent implements OnInit {
  //#region Properties

  // Input status
  @Input('status')
  public status: string = 'active';

  // Input image source
  @Input('imgSrc')
  public imgSrc: string = '../../../../assets/images/demo-profile.jpg';
  
  //#endregion

  //#region Constructor
  public constructor() {}
  //#endregion

  //#region Methods
  public ngOnInit(): void {}

  //#endr`egion
}
