import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  public userArray: any;
  returnedname: string;
  constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router) {
    this.initializeForm(fb);
    this.userArray = [];
  }

  ngOnInit() {
  }

  initializeForm(fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const loginUserData: any = {};
    const email = this.userForm.controls['name'].value;
    const pwd = this.userForm.controls['password'].value;
    loginUserData.email = email;
    loginUserData.password = pwd;
    this.loginService.loggedIn(loginUserData).subscribe(
      res => {
        localStorage.setItem('token', res['token']);
        this.route.navigate(['/dashboard']);
      },
      err => console.log(err)
    );
  }
}
