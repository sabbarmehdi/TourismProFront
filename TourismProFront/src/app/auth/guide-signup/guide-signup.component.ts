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

    firstName : string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    cin: string;
    license: string;
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
    this.firstName = this.userForm.get('firstName').value;
    this.lastName = this.userForm.get('lastName').value;
    this.username = this.userForm.get('username').value;
    this.password = this.userForm.get('password').value;
    this.cin = this.userForm.get('cin').value;
    this.license = this.userForm.get("license").value;
    this.suiventStatus = true; 
  }
  
  onSubmit():void{
    const owner = this.userForm.get("owner").value;
    const model = this.userForm.get("model").value;
    const seatsNum = this.userForm.get("seatsNum").value;
    const registrationNum = this.userForm.get("registrationNum").value;

   /*  console.log(JSON.stringify(owner));
    console.log(JSON.stringify(model));
    console.log(JSON.stringify(seatsNum)); */

    const newCar = new Car( model, owner, seatsNum, registrationNum);
    console.log(JSON.stringify(newCar));
    const newUser = new TourGuide(this.firstName,this.lastName, this.username, this.password, this.cin, this.license, newCar);


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


}
