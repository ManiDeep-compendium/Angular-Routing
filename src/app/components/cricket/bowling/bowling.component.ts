import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bowling',
  standalone: true,
  imports: [],
  templateUrl: './bowling.component.html',
  styleUrl: './bowling.component.scss'
})
export class BowlingComponent implements OnInit {

  private activateRoute = inject(ActivatedRoute);
  @Input() athlete!: any;
  @Input() specialization!: any;

ngOnInit(): void {
  // this.activateRoute.data.subscribe((res)=>{
  //   console.log(res,'from bowling');
  // })
  console.log(this.athlete,'atheletee info from Input');
  console.log(this.specialization,'atheletee info from Input');
}
}
