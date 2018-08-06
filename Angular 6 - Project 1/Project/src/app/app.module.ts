import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { PaginationComponent } from './restaurants/pagination/pagination.component';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component';
import { RatingComponent } from './restaurants/rating/rating.component';
import { RestaurantsModalComponent } from './restaurants/restaurants-modal/restaurants-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    PaginationComponent,
    RestaurantItemComponent,
    RatingComponent,
    RestaurantsModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [RestaurantsModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
