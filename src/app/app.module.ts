import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { ROUTES } from 'app/app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsService } from './restaurants/restaurantsService';
import { Http } from '@angular/http/src/http';
import { RestaurantsDetalheComponent } from './restaurants-detalhe/restaurants-detalhe.component';
import { MenuComponent } from './restaurants-detalhe/menu/menu.component';
import { MenuItemComponent } from './restaurants-detalhe/menu-item/menu-item.component';
import { CartShoppingComponent } from './restaurants-detalhe/cart-shopping/cart-shopping.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantsDetalheComponent,
    MenuComponent,
    MenuItemComponent,
    CartShoppingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
