import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { ViewProjectsDetailComponent } from './view-projects-detail/view-projects-detail.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewUsersDetailComponent } from './view-users-detail/view-users-detail.component';
import { ViewReleasesComponent } from './view-releases/view-releases.component';
import { ViewReleasesDetailComponent } from './view-releases-detail/view-releases-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewHomeComponent,
    ViewProjectsComponent,
    ViewProjectsDetailComponent,
    ViewReleasesComponent,
    ViewReleasesDetailComponent,
    ViewUsersComponent,
    ViewUsersDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
