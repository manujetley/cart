import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  public userArray: any;
  returnedname: string;
  constructor(private fb: FormBuilder, private loginService: LoginService) {
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
    const name = this.userForm.controls['name'].value;
    const pwd = this.userForm.controls['password'].value;
    this.loginService.validateUser().subscribe(res => {
      console.log('i am resp : ', res);
      this.userArray = res;
      this.returnedname = (res as any)[0]['name'];
      return res;
    });
    console.log(name);
    console.log(pwd);
    console.log('this is the user array after assignment : ', this.userArray);
    // setTimeout(() => {
    //   alert('hello text :' + this.returnedname)
    // }, 3000);
    console.log('this is the user array after assignment : ', this.returnedname);
  }
}
