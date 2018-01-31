import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-updates',
  templateUrl: './view-updates.component.html',
  styleUrls: ['./view-updates.component.css']
})
export class ViewUpdatesComponent implements OnInit {

  public updates = [
    {
      content: 'ログイン機能を追加しました',
      date: '2018-01-01',
      title: 'ログイン機能を追加しました'
    },
    {
      content: 'ログイン機能を追加しました',
      date: '2018-02-01',
      title: 'ユーザ検索機能を追加しました'
    },
    {
      content: 'ログイン機能を追加しました',
      date: '2018-03-01',
      title: 'GitHub連携機能を追加しました'
    },
    {
      content: 'ログイン機能を追加しました',
      date: '2018-04-01',
      title: 'プロジェクト作成機能を追加しました'
    },
    {
      content: 'ログイン機能を追加しました',
      date: '2018-05-01',
      title: 'ユーザページ機能を追加しました'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
