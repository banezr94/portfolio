import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RestaurantList } from '../model/restaurant-list';
import { MenuList } from '../model/menu-list';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getData(newParams?: any): Observable<RestaurantList> {
    let queryParams = {};

    if(newParams) {
      let filter = {}
      filter['priceFrom'] = newParams.filter && newParams.filter.priceFrom && newParams.filter.priceFrom.toString() || '1';
      filter['priceTo'] = newParams.filter && newParams.filter.priceTo && newParams.filter.priceTo.toString() || '5';
      filter['cuisine'] = newParams.filter && newParams.filter.cuisine && newParams.filter.cuisine.toString() || '';

      queryParams = {
        params: new HttpParams()
          .set("pageSize", newParams.pageSize && newParams.pageSize.toString() || '12')
          .set("page", newParams.page && newParams.page.toString() || '1')
          .set("sort", newParams.sort && newParams.sort.toString() || 'rating')
          .set("sortDirection", newParams.sortDirection && newParams.sortDirection.toString() || 'desc')
          .set("filter", JSON.stringify(filter))
      }
    }
    
    return this.http.get<RestaurantList>("http://localhost:3000/api/restaurants", queryParams).pipe(map(res => {
      return new RestaurantList(res);
    }));
  }

  getMenu(restaurantId: number): Observable<MenuList> {
    return this.http.get<RestaurantList>("http://localhost:3000/api/restaurants/" + restaurantId + "/menus")
      .pipe(map(res => {
        return new MenuList(res);
      }));
  }
}