import {Component, OnInit} from '@angular/core';
import {Route, Router, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }


  ngOnInit() {
  }

  goHome() {

    this.router.navigate(['']);
  }

}
export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: RecipesComponent},
  {path: 'shoppingList', component: ShoppingListComponent},
  {path: 'home/newRecipe', component:  ShoppingListComponent}

];
