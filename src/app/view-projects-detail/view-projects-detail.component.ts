import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-projects-detail',
  templateUrl: './view-projects-detail.component.html',
  styleUrls: ['./view-projects-detail.component.css']
})
export class ViewProjectsDetailComponent implements OnInit {

  public numbers = [1, 2, 3];

  public coin = 0;

  constructor(private location: Location) {
  }

  public formatterPercent(value) {
    return `${value} XRP`;
  }

  public parserPercent(value) {
    return value.replace('XRP', '');
  }

  public onBack() {
    this.location.back();
  }

  public ngOnInit() {
  }
}
