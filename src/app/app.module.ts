import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'lib';

import { AppComponent } from './app.component';
import { NotFoundComponent }   from './not-found.component';
import { LoginComponent } from './login.component';
import { PageComponent } from './page.component';


const appRoutes: Routes =[
    { path: '', component: LoginComponent},
    { path: 'page', component: PageComponent},
    { path: '**', component: NotFoundComponent }
];

const config = new SocialAuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('9714533990-em5nju6pivfdiv2vbrm5t3rqrs89354m.apps.googleusercontent.com')
  },
]);

export function provideConfig() {
  return config;
}

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, SocialLoginModule, HttpClientModule],
    declarations: [AppComponent, LoginComponent, PageComponent, NotFoundComponent],
    providers: [{
        provide: SocialAuthServiceConfig,
        useFactory: provideConfig
    }],
    bootstrap: [AppComponent]
  })
export class AppModule { }
