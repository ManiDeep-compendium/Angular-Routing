import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsListPageComponent } from './components/products-list-page/products-list-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductDescriptionPageComponent } from './components/product-description-page/product-description-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SpecialPageComponent } from './components/special-page/special-page.component';
import path from 'path';
import { Component } from '@angular/core';
import { SportsAcademyComponent } from './components/sports-academy/sports-academy.component';
import { CricketComponent } from './components/cricket/cricket.component';
import { clubGuard } from './components/cricket/Guards/club.guard';
import { adminGaurdGuard } from './components/cricket/Guards/admin-gaurd.guard';

export const routes: Routes = [
  {
    path:"",
    redirectTo: "sports-club",
    pathMatch: "full"
  },
  {
    path: "sports-club",
    component:SportsAcademyComponent,
    canMatch:[adminGaurdGuard]
  },
  {
    path: "cricket-club",
    loadChildren: () => import('./components/cricket/cricket-routes').then(module => module.CriketRoutes),
    data: {
      title: "Cricket Club",
      description: "Learn about cricket, its rules, and techniques."
    },
    canActivateChild:[clubGuard]
  },
  {
    path:"error",
    redirectTo: "**",
    pathMatch: "full"
  },
  {
    path:"**",
    loadComponent: ()=> import('./components/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent),
  }
];
