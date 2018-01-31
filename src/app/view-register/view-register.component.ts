import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-register',
  templateUrl: './view-register.component.html',
  styleUrls: ['./view-register.component.css']
})
export class ViewRegisterComponent implements OnInit {

  public logoSrc = '/assets/logo-black.png';

  public formGroup: FormGroup;

  public submitForm() {
    this.email.markAsDirty();
    this.password.markAsDirty();
    this.termsOfService.markAsDirty();
  }

  constructor(private fb: FormBuilder) {
  }

  public get email() {
    return this.formGroup.get('email');
  }

  public get password() {
    return this.formGroup.get('password');
  }

  public get termsOfService() {
    return this.formGroup.get('termsOfService');
  }

  public get privacyPolicy() {
    return this.privacyPolicy.get('privacyPolicy');
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
      termsOfService: [true],
      privacyPolicy: [true]
    });
  }

}
