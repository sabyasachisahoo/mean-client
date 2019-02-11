import { Component, OnInit } from '@angular/core';
import {  AuthenticationService } from '../../../core/authentication/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private fb: FormBuilder,
    private auth: AuthenticationService, private router: Router) {

     this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
   }

  ngOnInit() {
  }
login() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.auth.login(val.email,val.password).subscribe(() => {
        this.router.navigateByUrl('/profile');
      }, (err) => {
        console.error(err);
      });
    }
  }

}
