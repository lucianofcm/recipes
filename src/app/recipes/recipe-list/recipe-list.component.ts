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
    new Recipe('Receita', 'Dummy', 'http://thumbs2.ebaystatic.com/d/l225/m/mO6VXtbZOhRiefkRJW6UWBg.jpg', []),
    new Recipe('Recita 1', 'descrição 1', 'http://thumbs.ebaystatic.com/images/g/DfkAAOSw32lYqo3x/s-l225.jpg', [new Ingredient('Acucar', 2)]),
    new Recipe('Receita 2', 'descrição 2', 'http://www.receitasanamaria.net/wp-content/uploads/2015/10/pudim-de-leite-mo%C3%A7a.jpg', []),
    new Recipe('Receita 2', 'descrição 3', `http://morandosozinha.com.br/wp-content/uploads/2016/02/10-receitas-f%C3%A1ceis-que-ficam-prontas-em-30-minutos-ou-menos-Morando-Sozinha-panqueca-de-omelete.jpg`, [])
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
