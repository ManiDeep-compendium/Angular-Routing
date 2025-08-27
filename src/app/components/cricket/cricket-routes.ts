import { Routes } from "@angular/router";
import { CricketComponent } from "./cricket.component";
import { AthleteCondition } from "./services/AthleteCondition";
import { authGuard } from "./Guards/auth.guard";

export const CriketRoutes: Routes = [
  
  {
    path:"",
    component: CricketComponent
  },
  {
    path: "bowling/:id",
    loadComponent: () => import('./bowling/bowling.component').then(c => c.BowlingComponent),
    data: {
      specialization: "Bowling",
      title:"Bowling training"
    },
    resolve: {
      athlete: AthleteCondition
    },
  },
  {
    path: "batting",
    loadComponent: ()=> import('./batting/batting.component').then(c => c.BattingComponent),
    canActivate: [authGuard]
  },
  {
    path: "wicket-keeping",
    loadComponent: () => import('./wicket-keeping/wicket-keeping.component').then(c => c.WicketKeepingComponent),
  }
]