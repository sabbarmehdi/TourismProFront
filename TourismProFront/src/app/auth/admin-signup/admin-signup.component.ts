import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/user-services/auth.service';
import {Tourist} from '../../models/users/tourist';
import {Admin} from '../../models/users/admin';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    username: new FormControl(),
    email:new FormControl(),
    password: new FormControl()
  });

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      firstName:[null, [Validators.required]],
      lastName:[null, [Validators.required]],
      username:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      password:[null, Validators.required, Validators.pattern]
    });
  }

  onSubmit():void{
    const firstName = this.userForm.get('firstName').value;
    const lastName = this.userForm.get('lastName').value;
    const username = this.userForm.get('username').value;
    const email = this.userForm.get('email').value;
    const password = this.userForm.get('password').value;
    const status = false;
    const newAdmin = new Admin(firstName,lastName, username, email, password, status);


    this.authService.registerAdmin(newAdmin).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log(newAdmin);
        this.router.navigate(["admin/login"]);
      },
      (error) => {
        this.errorMessage = error.message;
        this.isSignUpFailed = true;
      }
    );

  }

  goToLogin(){
    this.router.navigate(['/admin/login']);
  }

}
