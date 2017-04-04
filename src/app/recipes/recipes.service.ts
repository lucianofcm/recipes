import {Injectable} from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient';

@Injectable()
export class RecipesService {

  recipes: Recipe[] = [
    new Recipe('Receita 0', 'Dummy', 'https://az858194.vo.msecnd.net/cdn/media/home/inspiring-recipes/c/recipe-chicken-teriyaki.ashx', []),
    new Recipe('Receita 1', 'descrição 1', 'https://i.ytimg.com/vi/dsJtgmAhFF4/maxresdefault.jpg', [new Ingredient('Acucar', 2), new Ingredient('Leite', 2)]),
    new Recipe('Receita 2', 'descrição 2', 'http://www.receitasanamaria.net/wp-content/uploads/2015/10/pudim-de-leite-mo%C3%A7a.jpg', []),
    new Recipe('Receita 3', 'descrição 3', 'http://static.kidspot.com.au/cm_assets/613/italian_690x414-20150330021113.jpg~q75,dx720y432u1r1gg,c--.jpg', [])
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }

}
