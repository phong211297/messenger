import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerOverviewComponent } from './messenger-overview.component';

describe('MessengerOverviewComponent', () => {
  let component: MessengerOverviewComponent;
  let fixture: ComponentFixture<MessengerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
