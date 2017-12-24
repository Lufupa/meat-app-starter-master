import { Restaurants } from './restaurant/restaurant.module';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MEAT_API } from 'app/app.api';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantsService {
    constructor(private http: Http) { }

    restaurants(): Observable<Restaurants[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json());
            

    }
    
    restaurantById(id:string): Observable <Restaurants> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json());
    }
}