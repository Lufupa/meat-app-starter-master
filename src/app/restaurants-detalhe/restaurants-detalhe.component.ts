import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Restaurants } from '../restaurants/restaurant/restaurant.module';
import { RestaurantsService } from '../restaurants/restaurantsService';



@Component({
  selector: 'mt-restaurants-detalhe',
  templateUrl: './restaurants-detalhe.component.html',
  styleUrls: ['./restaurants-detalhe.component.css']
})
export class RestaurantsDetalheComponent implements OnInit {
  private restaurants: Restaurants;

  constructor(private restaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurants = restaurant)
    console.log(this.restaurants)
  }

}
