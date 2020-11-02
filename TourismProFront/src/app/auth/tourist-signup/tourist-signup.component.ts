import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tourist } from 'src/app/models/users/tourist';
import { AuthService } from 'src/app/services/user-services/auth.service';

@Component({
  selector: 'app-tourist-signup',
  templateUrl: './tourist-signup.component.html',
  styleUrls: ['./tourist-signup.component.css']
})
export class TouristSignupComponent implements OnInit {

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
      password:['', Validators.required]
    });
  }
  
  onSubmit():void{    
    const firstName = this.userForm.get('firstName').value;
    const lastName = this.userForm.get('lastName').value;
    const username = this.userForm.get('username').value;
    const email = this.userForm.get('email').value;
    const password = this.userForm.get('password').value;

    const newUser = new Tourist(firstName,lastName, username, email, password);

    
    this.authService.registerTourist(newUser).subscribe(
      newUser => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log(newUser);
        this.router.navigate(["user/login"]);
      },
      (error) => {
        this.errorMessage = error.message;
        this.isSignUpFailed = true;
      }
    );
    
    

    /* this.authService.registerTourist(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        //TODO: Check this Path!!!
        this.router.navigate(["user/login"]);
      },
      error => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    ); */
  }

  goToLogin(){
    this.router.navigate(['/user/login']);
  }
  

}
