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
  @Input('profile-image')
  public profileImage: string = '../../../../assets/images/demo-profile.jpg';

  // Input image source
  @Input('profile-title')
  public profileTitle: string;

  // Input should user have story
  @Input('should-user-have-story')
  public shouldUserHaveStory: boolean = false;

  // Inpu profile overview size
  @Input('profile-size')
  public profileSize: string = 'md';

  // Inpu profile overview size
  @Input('has-story')
  public hasStory: boolean = false;

  //#endregion

  //#region Constructor
  public constructor() {}
  //#endregion

  //#region Methods
  public ngOnInit(): void {}

  //#endr`egion
}
