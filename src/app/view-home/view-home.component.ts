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

  public submitForm() {
    this.email.markAsDirty();
    this.password.markAsDirty();
    this.remember.markAsDirty();
  }

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

  ngOnInit() {
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
