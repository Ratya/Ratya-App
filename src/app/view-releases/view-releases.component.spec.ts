import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReleasesComponent } from './view-releases.component';

describe('ViewReleasesComponent', () => {
  let component: ViewReleasesComponent;
  let fixture: ComponentFixture<ViewReleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReleasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
