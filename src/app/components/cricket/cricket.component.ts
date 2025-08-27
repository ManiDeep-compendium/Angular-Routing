import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cricket',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './cricket.component.html',
  styleUrl: './cricket.component.scss'
})
export class CricketComponent {
constructor(private activatedRoute: ActivatedRoute) {
  this.activatedRoute.data.subscribe((res)=>{
    console.log(res)
  })
}

submitDetails() {
    
}
}
