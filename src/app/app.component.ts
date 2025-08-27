import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Routing';
  isUserLoggedIn:boolean = true;

  // private router = inject(Router)

  constructor(private router: Router){}

  // goToSpecials():void {

  //   if(this.isUserLoggedIn) {
  //     this.router.navigate(['specials',89]);
  //   } 

  // }

  // goToInventoryBasedOnLoginStatus(): void {
  //   if(this.isUserLoggedIn) {
  //     // this.router.navigate(['products'],{
  //     //   queryParams:{
  //     //     name:"EV vehicle",
  //     //     price: 896
  //     //   }
  //     // })

  //     this.router.navigate(['products']);
  //   }
  // }
 }
