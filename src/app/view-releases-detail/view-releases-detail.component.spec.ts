import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReleasesDetailComponent } from './view-releases-detail.component';

describe('ViewReleasesDetailComponent', () => {
  let component: ViewReleasesDetailComponent;
  let fixture: ComponentFixture<ViewReleasesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReleasesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReleasesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
