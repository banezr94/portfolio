import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from '../model/restaurant';
import { Menu } from '../model/menu';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-restaurants-modal',
  templateUrl: './restaurants-modal.component.html',
  styleUrls: ['./restaurants-modal.component.css']
})
export class RestaurantsModalComponent implements OnInit {
  @Input() restaurant: Restaurant
  menu: Menu;

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.getMenu(this.restaurant._id).subscribe(res => {
      this.menu = res.results[0];
    });
  }

}
