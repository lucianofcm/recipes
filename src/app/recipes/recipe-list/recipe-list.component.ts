import {Component, OnInit, EventEmitter, Output, ViewChild, HostBinding} from '@angular/core';
import {Recipe} from '../recipe';
import {Ingredient} from '../../shared/ingredient';
import {ModalDirective} from 'ng2-bootstrap/modal';
import {RecipesService} from '../recipes.service';


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy', 'http://thumbs2.ebaystatic.com/d/l225/m/mO6VXtbZOhRiefkRJW6UWBg.jpg', []);
  private fechaModar;

  constructor(private recipeService: RecipesService) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  @HostBinding('class.open') get opened() {
    return this.fechaModar;
  }



  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
