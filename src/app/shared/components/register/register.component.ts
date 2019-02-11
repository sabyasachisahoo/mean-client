import { User } from '../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/authentication/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  regForm: FormGroup;
  constructor(private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router) {
    this.regForm = this.fb.group({
             username: ['', Validators.required],
             password: ['', Validators.required],
             email: ['', Validators.required]
        });
  }

  register() {
    const val = this.regForm.value;

    this.auth.register(val.username, val.email, val.password).subscribe(() => {
      this.router.navigateByUrl('/login');
    }, (err) => {
      console.error(err);
    });
  }

}
