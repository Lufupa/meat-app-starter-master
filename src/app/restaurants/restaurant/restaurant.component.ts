import { Component, OnInit, Input } from '@angular/core';
import { Restaurants } from './restaurant.module';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input()restaurant:Restaurants; 

  constructor() { }

  ngOnInit() {
  }

}
