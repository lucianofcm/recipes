import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent, routes} from './header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingListAddComponent} from './shopping-list/shopping-list-add.component';
import {DirectiveComponent} from './directive/directive.component';
import {HighlightDirective} from './directive/highlight.directive';
import {ProductModule} from './model/product.module';
import {DropdownDirective} from './dropdown.directive';
import {ModalAddrecipesComponent} from './recipes/modal-addrecipes/modal-addrecipes.component';
import {ModalModule} from 'ng2-bootstrap/ng2-bootstrap';
import {LogserviceComponent} from './logservice/logservice.component';
import {ServiceComponent} from './service/service.component';
import {CmpAComponent} from './service/cmp-a.component';
import {CmpBComponent} from './service/cmp-b.component';
import {LogService} from './service/log.service';
import {DataService} from './service/data.service';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DirectiveComponent,
    HighlightDirective,
    DropdownDirective,
    ModalAddrecipesComponent,
    LogserviceComponent,
    ServiceComponent,
    CmpAComponent,
    CmpBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [LogService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
