import { Component, ElementRef, Renderer2 } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'lib';

@Component({
    selector: 'page-app',
    template: `<div>Hello</div>
    <button (click)="signOut()" class="" >Logout</button>`
})
export class PageComponent {

    constructor(private authService: SocialAuthService) { }

    signOut(): void {
      this.authService.signOut();
    }

}
