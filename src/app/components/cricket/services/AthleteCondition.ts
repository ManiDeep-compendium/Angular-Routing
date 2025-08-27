import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

interface IAthleteCondition {
  id?: number;
  Running: string;
  MentalHealth: string;
}

const Athletes = [
  {
    id: 1,
    Name: 'Sagar',
    Running: 'Excellent',
    MentalHealth: 'very good',
  },
  {
    id: 2,
    Name: 'Veerendra',
    Running: 'Good',
    MentalHealth: 'Average',
  },
];

export const AthleteCondition: ResolveFn<IAthleteCondition | undefined> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  let Aid = route.paramMap.get('id');
  const getAthleteId = Aid ? Number(Aid) : 0;
  const currentAthlete = Athletes.find(
    (athlete) => athlete.id === getAthleteId
  );
  if (!currentAthlete) {
    inject(Router).navigate(['error'])
    return {
      id: 0,
      Name: '',
      Running: '',
      MentalHealth: '',
    };
  }
  return currentAthlete;
};
