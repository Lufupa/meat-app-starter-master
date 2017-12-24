import { Component, OnInit } from '@angular/core';
import { Restaurants } from './restaurant/restaurant.module';
import { RestaurantsService } from './restaurantsService';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
 
  restaurants:Restaurants[]=[];
  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
    .subscribe(restaurant => this.restaurants = restaurant)
  }

}
