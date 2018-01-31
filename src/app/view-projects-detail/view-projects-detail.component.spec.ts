import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectsDetailComponent } from './view-projects-detail.component';

describe('ViewProjectsDetailComponent', () => {
  let component: ViewProjectsDetailComponent;
  let fixture: ComponentFixture<ViewProjectsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProjectsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
