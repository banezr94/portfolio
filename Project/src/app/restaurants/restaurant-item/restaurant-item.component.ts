import { Component, OnInit, Input } from '@angular/core';

import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Restaurant} from "../model/restaurant";
import { RestaurantsModalComponent } from '../restaurants-modal/restaurants-modal.component';

@Component({
  selector: 'dr-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  openModal(restaurant) {
    const modalRef = this.modal.open(RestaurantsModalComponent);
    modalRef.componentInstance.restaurant = restaurant;
  }
}
