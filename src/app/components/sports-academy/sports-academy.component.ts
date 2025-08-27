import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports-academy',
  standalone: true,
  imports: [],
  templateUrl: './sports-academy.component.html',
  styleUrl: './sports-academy.component.scss'
})
export class SportsAcademyComponent {
  private router = inject(Router)

  navigateToSportClub(path: string) {
    this.router.navigate([path])
  }
}
