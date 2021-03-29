import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'lib';

@Component({
    selector: 'login-app',
    template: `<div class="container">
      <div class="">
        <h1 class="text-center py-4">Sign</h1>
        <div>
          <form [formGroup]="signinForm">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" class="form-control" id="email" formControlName="email">
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" formControlName="password" >
            </div>
          </form>
          <div>
            <button type="button" (click)="signInWithGoogle()" class="btn btn-primary">Sign In With Google</button>
          </div>
        </div>
    </div>
  </div>`,
    styleUrls: ['./scss/app.component.scss'],
})
export class LoginComponent implements OnInit {

    user: SocialUser;

    constructor(private authService: SocialAuthService) { }

    ngOnInit() {
       this.authService.authState.subscribe(user => {
         this.user = user;
       });
     }

    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.router.navigate(['/page']);
    }

}
