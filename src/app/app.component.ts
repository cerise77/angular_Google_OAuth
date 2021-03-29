import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                    <nav [ngClass]="{header:true}">
                      <ul>
                        <li><a routerLink=""></a></li>
                        <li><a routerLink="page"></a></li>
                      </ul>
                    </nav>
                    <router-outlet></router-outlet>
               `
})
export class AppComponent {}
