import { Restaurant } from "./restaurant";

export class RestaurantList {
  count: number;
  results: Restaurant[];

  constructor(obj?: any) {
    this.count = obj && obj.count || 0;
    this.results = obj && obj.results.map(elem => { return new Restaurant(elem); }) || [];
  }
}