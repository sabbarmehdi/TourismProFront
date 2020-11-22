import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/user-services/auth.service';
import {TokenStorageService} from '../../services/user-services/jwt-services/token-storage.service';
import {User} from '../../models/users/user';
const GUIDE_API = 'http://localhost:8080/api/auth/guide/';

@Component({
  selector: 'app-guide-login',
  templateUrl: './guide-login.component.html',
  styleUrls: ['./guide-login.component.css']
})
export class GuideLoginComponent implements OnInit {

  userForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenStorage: TokenStorageService) {
  }

  ngOnInit(){
    this.initForm();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {

    const username = this.userForm.get('username').value;
    const password = this.userForm.get('password').value;
    const userLogin: any = {
      username,
      password
    };
    console.log(JSON.stringify(userLogin));

    this.authService.login(userLogin, GUIDE_API).subscribe(
      (user: User) => {
        console.log(user);
        this.tokenStorage.saveToken(user.accessToken);
        this.tokenStorage.saveUser(user);
        this.tokenStorage.saveUserType(user.userType);

        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.roles = this.tokenStorage.getUser().roles;
        this.authService.getLoggedInUser.emit(user);
        this.goHome();
      },
      (error) => {
        this.errorMessage = error.message;
        this.isLoginFailed = true;
      }
    );
  }

  onReloadPage() {
    window.location.reload();
  }
  onSignup(){
      this.router.navigate(['/guide/signup']);
  }
  goHome() {
    this.router.navigate(['/dashboard']);
  }
}
