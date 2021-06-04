import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger-overview',
  templateUrl: './messenger-overview.component.html',
  styleUrls: ['./messenger-overview.component.scss'],
})
export class MessengerOverviewComponent implements OnInit {
  //#region Properties

  // Input profile
  @Input('profile')
  public profile: any;

  // Input message title
  @Input('message-title')
  public messageTitle: string = 'Messenger title';

  // Imput message content
  @Input('message-content')
  public messageContent: string = 'Messenger content';

  // Input messege status
  @Input('message-status')
  public messageStatus: string = 'unread';

  //#endregion

  //#region Constructor
  public constructor() {}
  //#endregion

  //#region Methods

  // Trigger when component inits
  public ngOnInit(): void {}
  //#endregion
}
