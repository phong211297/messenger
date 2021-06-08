import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedActiveComponent } from './feed-active.component';

describe('FeedActiveComponent', () => {
  let component: FeedActiveComponent;
  let fixture: ComponentFixture<FeedActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
