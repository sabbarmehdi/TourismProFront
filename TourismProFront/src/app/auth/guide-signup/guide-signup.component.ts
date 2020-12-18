import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { TourGuide } from 'src/app/models/users/tour-guide';
import { AuthService } from 'src/app/services/user-services/auth.service';
import { MustMatch } from 'src/app/_helpers/must-match.validator';

@Component({
  selector: 'app-guide-signup',
  templateUrl: './guide-signup.component.html',
  styleUrls: ['./guide-signup.component.css']
})
export class GuideSignupComponent implements OnInit {

    userInfoForm: any;

  userForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      cin: new FormControl(),
      license: new FormControl()
    });
  carForm = new FormGroup({
      owner: new FormControl(),
      model: new FormControl(),
      seatsNum: new FormControl(),
      registrationNum: new FormControl()
  });
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  suiventStatus = false;

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
      cin: [null, [Validators.required]],
      license: [null, [Validators.required]],
      password:['', [Validators.required, Validators.minLength(8), Validators.pattern]],
      confirmPassword:['', Validators.required]
    },{
      validator: MustMatch('password', 'confirmPassword')
    });
    
    this.carForm = this.formBuilder.group({
      owner: [null, [Validators.required]],
      model: [null, [Validators.required]],
      seatsNum: [null, [Validators.required]],
      registrationNum: [null, [Validators.required]]
    });
  }

  onSuivent():void{
    const firstName = this.userForm.get('firstName').value;
    const lastName = this.userForm.get('lastName').value;
    const username = this.userForm.get('username').value;
    const password = this.userForm.get('password').value;
    const cin = this.userForm.get('cin').value;
    const license = this.userForm.get("license").value;
  
    this.userInfoForm = {firstName, lastName, username, password, cin, license};
    console.log(JSON.stringify(this.userInfoForm));
    
    this.suiventStatus = true;
  }
  
  onSubmit():void{
    const firstName = this.userInfoForm.firstName;
    const lastName = this.userInfoForm.lastName;
    const username = this.userInfoForm.username;
    const password = this.userInfoForm.password;
    const cin = this.userInfoForm.cin;
    const license = this.userInfoForm.license;

    const owner = this.carForm.get("owner").value;
    const model = this.carForm.get("model").value;
    const seatsNum = this.carForm.get("seatsNum").value;
    const registrationNum = this.carForm.get("registrationNum").value;
    
    const newCar = new Car( model, owner, seatsNum, registrationNum);

    console.log(JSON.stringify(newCar));
    const newUser = new TourGuide(firstName,lastName, username, password, cin, license, newCar);


    this.authService.registerGuide(newUser).subscribe(
      newUser => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log(JSON.stringify(newUser));
        this.router.navigate(["guide/login"]);
      },
      (error) => {
        this.errorMessage = error.message;
        this.isSignUpFailed = true;
      }
    );
    console.log("second" + JSON.stringify(newUser));
  }

  goToLogin(){
    this.router.navigate(['/guide/login']);
  }

  goBack(){
    this.suiventStatus = false;
  }

}
