import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { ViewProjectsDetailComponent } from './view-projects-detail/view-projects-detail.component';
import { ViewReleasesComponent } from './view-releases/view-releases.component';
import { ViewReleasesDetailComponent } from './view-releases-detail/view-releases-detail.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewUsersDetailComponent } from './view-users-detail/view-users-detail.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ViewProjectsComponent
  },
  {
    path: 'projects/:id',
    component: ViewProjectsDetailComponent
  },
  {
    path: 'releases',
    component: ViewReleasesComponent
  },
  {
    path: 'releases/:id',
    component: ViewReleasesDetailComponent
  },
  {
    path: 'users',
    component: ViewUsersComponent
  },
  {
    path: 'users/:id',
    component: ViewUsersDetailComponent
  },
  {
    path: '',
    component: ViewHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
