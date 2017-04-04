import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[] = [];

  constructor(private shopService: ShoppingListService) {
  }

  ngOnInit() {
    this.items = this.shopService.getItems();
  }

}
