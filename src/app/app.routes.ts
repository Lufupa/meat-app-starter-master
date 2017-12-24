import { Routes } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { HomeComponent } from "app/home/home.component";
import { Component } from '@angular/core';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsDetalheComponent } from './restaurants-detalhe/restaurants-detalhe.component';

export const ROUTES: Routes = [

    { path: '', component: HomeComponent },
    {path:'restaurants', component:RestaurantsComponent},
    {path:'restaurants/:id', component:RestaurantsDetalheComponent},
    {path: 'about', component: AboutComponent }
];