import { CanMatchFn } from '@angular/router';

export const adminGaurdGuard: CanMatchFn = (route, segments) => {
  console.log(route,'route');
  console.log(segments,'segments');
  return true
};
