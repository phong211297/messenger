import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-active',
  templateUrl: './chat-active.component.html',
  styleUrls: ['./chat-active.component.scss'],
})
export class ChatActiveComponent implements OnInit {
  //#region Properties

  // Input profile
  @Input('profile')
  public profile: any;

  // Input message title
  @Input('message-title')
  public messageTitle: string = 'Messenger title';

  // Imput message content
  @Input('message-content')
  public messageContent: string;

  //#endregion

  //#region Constructor
  public constructor() {}
  //#endregion

  //#region Methods

  // Trigger when component inits
  public ngOnInit(): void {}
  //#endregion
}
