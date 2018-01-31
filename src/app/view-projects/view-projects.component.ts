import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  public imageURLs = [1, 2, 3, 4];

  public data = [
    {
      content: 'Ratyaはオープンソースプロジェクトを支援するサービスです。',
      updatedAt: '2018年01月01日',
      title: 'Ratyaプロジェクト'
    },
    {
      content: 'これはサンプルのプロジェクトです。',
      updatedAt: '2018年02月01日',
      title: 'サンプルのプロジェクト 0'
    },
    {
      content: 'これはサンプルのプロジェクトです。',
      updatedAt: '2018年03月01日',
      title: 'サンプルのプロジェクト 1'
    },
    {
      content: 'これはサンプルのプロジェクトです。',
      updatedAt: '2018年04月01日',
      title: 'サンプルのプロジェクト 2'
    },
    {
      content: 'これはサンプルのプロジェクトです。',
      updatedAt: '2018年05月01日',
      title: 'サンプルのプロジェクト 3'
    }
  ];

  searchText = '';

  public onSearch(event: string): void {
    console.log(event);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
