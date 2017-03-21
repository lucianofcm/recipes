import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';
import {Ingredient} from '../../shared/ingredient';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://thumbs2.ebaystatic.com/d/l225/m/mO6VXtbZOhRiefkRJW6UWBg.jpg', []),
    new Recipe('Produto1', 'descrição 1', 'http://thumbs.ebaystatic.com/images/g/DfkAAOSw32lYqo3x/s-l225.jpg', [new Ingredient('Acucar', 2)]),
    new Recipe('Produto2', 'descrição 2', 'http://thumbs.ebaystatic.com/images/g/eRgAAOSw4A5YtWxj/s-l225.jpg', []),
    new Recipe('Produto3', 'descrição 3', 'http://thumbs.ebaystatic.com/images/g/QsMAAOSwol5YxkOE/s-l225.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy', 'http://thumbs2.ebaystatic.com/d/l225/m/mO6VXtbZOhRiefkRJW6UWBg.jpg', []);

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
