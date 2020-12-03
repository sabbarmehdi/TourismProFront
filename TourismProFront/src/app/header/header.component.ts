import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { User } from '../models/users/user';
import { AuthService } from '../services/user-services/auth.service';
import { TokenStorageService } from '../services/user-services/jwt-services/token-storage.service';

const ADMIN = "ADMIN";
const TOURIST = "TOURIST";
const TOURGUIDE = "TOURGUIDE"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  roles: string[];
  isLoggedIn = false;

  showTouristMenu = false;
  showGuideMenu = false;
  showAdminMenu = false;
  username: String;
  loggedInUser: any;

  constructor(private tokenStorage: TokenStorageService,
              private authService: AuthService,
              private router: Router) {
               /*  this.router.events.subscribe((event: any) => {
                  if (event instanceof NavigationStart) {
                    if (event['url'] == 'user/login'|| 'user/signup'|| 'guide/login' || 'guide/singup') {
                      this.showHeader = false;
                    } else {
                      // console.log("NU")
                      this.showHeader = true;
                    }
                }
              }); */
                
              }

  ngOnInit() {
   

     this.isLoggedIn = !!this.authService.isLoggedIn();
     //this.isLoggedIn = !!this.tokenStorage.getToken();

    this.authService.getLoggedInUser.subscribe(
      (user: User)=> {
        this.onUpdateHeader(user)
        this.userMenu(user);
      });
    
      if(this.isLoggedIn){
        const user = this.tokenStorage.getUser();
        const userType = this.tokenStorage.getUserType();
        this.roles = user.roles;
              //console.log( "userType Test" + userType.valueOf);
        this.userMenu(user);
      }
  }

  userMenu(user){
    switch(user.userType){
      case "TOURIST":
        this.showTouristMenu = true;
        break;
      case "TOURGUIDE":
        this.showGuideMenu = true;
        break;
      case "ADMIN":
        this.showAdminMenu = true;
        break;
      default:
        console.log("userType did't setted correctly!!"); 
    }
  }
  logout(){
    this.isLoggedIn = false;
    this.showAdminMenu = false;
    this.showGuideMenu = false;
    this.showTouristMenu = false;
    this.tokenStorage.signOut();
    this.router.navigate(["dashboard"]);
    
  }
  onUpdateHeader(user: User) {
    this.isLoggedIn = true;
    this.loggedInUser = user;
    console.log("logged in user : " + JSON.stringify(user));
    this.userMenu(user);
    /*this.showAdminMenu = user.userType == ADMIN;
    this.showGuideMenu = user.userType == TOURGUIDE;
    this.showTouristMenu = user.userType == TOURIST;*/
    console.log("tourist Test:" + this.showTouristMenu);
    
  }

}
