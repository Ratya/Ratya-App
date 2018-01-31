import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpdatesComponent } from './view-updates.component';

describe('ViewUpdatesComponent', () => {
  let component: ViewUpdatesComponent;
  let fixture: ComponentFixture<ViewUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
