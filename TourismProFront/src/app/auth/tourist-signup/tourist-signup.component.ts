import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tourist } from 'src/app/models/users/tourist';
import { AuthService } from 'src/app/services/user-services/auth.service';
import { MustMatch } from 'src/app/_helpers/must-match.validator';



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
      username:[null, [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8), Validators.pattern]],
      confirmPassword:['', Validators.required]
    },{
      validator: MustMatch('password', 'confirmPassword')
    }
    );
  }

  onSubmit():void{
    const firstName = this.userForm.get('firstName').value;
    const lastName = this.userForm.get('lastName').value;
    const username = this.userForm.get('username').value;
    const password = this.userForm.get('password').value;

    const newUser = new Tourist(firstName,lastName, username, password);


    this.authService.registerTourist(newUser).subscribe(
      newUser => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log(JSON.stringify(newUser));
        this.router.navigate(["user/login"]);
      },
      (error) => {
        this.errorMessage = error.message;
        this.isSignUpFailed = true;
      }
    );

  }

  goToLogin(){
    this.router.navigate(['/user/login']);
  }


}
