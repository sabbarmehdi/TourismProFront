import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { TourGuide } from 'src/app/models/users/tour-guide';
import { AuthService } from 'src/app/services/user-services/auth.service';

@Component({
  selector: 'app-guide-signup',
  templateUrl: './guide-signup.component.html',
  styleUrls: ['./guide-signup.component.css']
})
export class GuideSignupComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl(),
      lastName: new FormControl(),
      username: new FormControl(),
      email:new FormControl(),
      password: new FormControl(),
      cin: new FormControl(),
      licence: new FormControl(),
      owner: new FormControl(),
      model: new FormControl(),
      seatsNum: new FormControl()
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
      password:[null, [Validators.required, Validators.pattern]],
      cin: [null, [Validators.required]],
      licence: [null, [Validators.required]],
      owner: [null, [Validators.required]],
      model: [null, [Validators.required]],
      seatsNum: [null, [Validators.required]]
    });
  }
  
  onSubmit():void{    
    const firstName = this.userForm.get('firstName').value;
    const lastName = this.userForm.get('lastName').value;
    const username = this.userForm.get('username').value;
    const email = this.userForm.get('email').value;
    const password = this.userForm.get('password').value;
    const cin = this.userForm.get('cin').value;
    const licence = this.userForm.get("licence").value;

    const owner = this.userForm.get("owner").value;
    const model = this.userForm.get("model").value;
    const seatsNum = this.userForm.get("seatsNum").value;

    const newCar = new Car(owner, model,seatsNum);

    const newUser = new TourGuide(firstName,lastName, username, email, password, cin, licence, newCar);

    
    this.authService.registerGuide(newUser).subscribe(
      newUser => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log(newUser);
        this.router.navigate(["guide/login"]);
      },
      (error) => {
        this.errorMessage = error.message;
        this.isSignUpFailed = true;
      }
    );
    console.log("second" + newUser);
  }

  goToLogin(){
    this.router.navigate(['/guide/login']);
  }
  

}
