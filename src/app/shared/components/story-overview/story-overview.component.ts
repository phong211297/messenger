import { SliderControllerService } from './../../service/slider-controller.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-overview',
  templateUrl: './story-overview.component.html',
  styleUrls: ['./story-overview.component.scss'],
})
export class StoryOverviewComponent implements OnInit {
  //#region Properties

  // Input story source
  @Input('story-source')
  public storySource: any[] = [
    {
      wallpaper: '../../../../assets/images/demo-story.jpg',
    },
    {
      wallpaper: '../../../../assets/images/demo-story.jpg',
    },
  ];

  // Input profile
  @Input('profile')
  public profile: any = {
    title: 'Nguyễn Sơn',
  };

  // Last story available
  public lastStory: any = this.storySource[this.storySource.length - 1];

  //#endregion

  //#region Constructor
  public constructor(
    protected sliderControllerService: SliderControllerService
  ) {}
  //#endregion

  //#region Methods

  // Trigger when component intis
  public ngOnInit(): void {}

  // Trigger when click on story overview
  public openStoryDetail(): void {
    this.sliderControllerService.openSliderView();
  }
  //#endregion
}
