import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-special-page',
  standalone: true,
  imports: [],
  templateUrl: './special-page.component.html',
  styleUrl: './special-page.component.scss'
})
export class SpecialPageComponent implements OnInit {
  private activeRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.getParams();
    this.getQueryParams();
  }
  constructor() {
    console.log('component generated');
  }

  getParams(): void {
    console.log(this.activeRoute.snapshot.params,'routeparams');
    this.activeRoute.params.subscribe({
      next:(data)=>{

        console.log(data,'parasData through subscription');

      },
      error:(err)=>{
        console.error(err);
      },
      complete:()=>{
        console.log('observable completed');
      }
    });
  }

  getQueryParams(): void {
    console.log(this.activeRoute.snapshot.queryParams,'qryparams');

    this.activeRoute.queryParams.subscribe({
      next:(data: Object)=>{
        console.log(data,'queryParamsFromubscription');
      },
      error:(err)=>{
        console.error(err);
      },
      complete:()=>{
        console.log('Observable completed');
      }
    })
  }
}
