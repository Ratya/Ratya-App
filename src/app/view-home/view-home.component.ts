import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {

  public logoSrc = '/assets/logo-black.png';

  public formGroup: FormGroup;

  public updates = [
    {
      title: 'ログイン機能を追加しました',
      date: '2018-01-01'
    },
    {
      title: 'ユーザ検索機能を追加しました',
      date: '2018-02-01'
    },
    {
      title: 'GitHub連携機能を追加しました',
      date: '2018-03-01'
    },
    {
      title: 'プロジェクト作成機能を追加しました',
      date: '2018-04-01'
    },
    {
      title: 'ユーザページ機能を追加しました',
      date: '2018-05-01'
    }
  ];

  constructor(private fb: FormBuilder) {
  }

  public get email() {
    return this.formGroup.get('email');
  }

  public get password() {
    return this.formGroup.get('password');
  }

  public get remember() {
    return this.formGroup.get('remember');
  }

  public submitForm() {
    this.email.markAsDirty();
    this.password.markAsDirty();
    this.remember.markAsDirty();
  }

  public ngOnInit() {
    this.formGroup = this.fb.group({
      email: [
        null, [
          Validators.required,
          Validators.maxLength(40),
          Validators.email
        ]
      ],
      password: [
        null, [
          Validators.required,
          Validators.maxLength(20)
        ]
      ],
      remember: [true]
    });
  }

}
