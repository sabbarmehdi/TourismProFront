import { Component } from '@angular/core';
import { GuideLoginComponent } from './auth/guide-login/guide-login.component';
import { GuideSignupComponent } from './auth/guide-signup/guide-signup.component';
import { TouristLoginComponent } from './auth/tourist-login/tourist-login.component';
import { TouristSignupComponent } from './auth/tourist-signup/tourist-signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TourismProFront';
  showHeader = true;

  showHideNav(event){
      if(event instanceof TouristLoginComponent){
        this.showHeader = false;
      }else if( event instanceof GuideLoginComponent){
        this.showHeader = false;
      }else if(event instanceof TouristSignupComponent){
        this.showHeader = false;
      }else if(event instanceof GuideSignupComponent){
        this.showHeader = false;
      }else {
        this.showHeader = true
      }
  }
}
