import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe'

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  recipe: Recipe;
  recipeID: number;

  constructor() { }

  ngOnInit() {
  }

}
