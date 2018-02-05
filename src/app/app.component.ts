import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public logoSrc = '/assets/logo-white.png';

  public nzTheme = 'dark';

  public nzMode = 'vertical';

  public isCollapsed = true;

  public nzBreakpoint = 'sm';

  public nzWidth = 64;

  public routerLinkActiveOptions = {
    exact: true
  };

  public routes = [
    {
      icon: 'anticon-home',
      routerLink: '/'
    }, {
      icon: 'anticon-rocket',
      routerLink: '/projects'
    }, {
      icon: 'anticon-check',
      routerLink: '/releases'
    }, {
      icon: 'anticon-team',
      routerLink: '/users'
    }];

  constructor() {
  }

}
