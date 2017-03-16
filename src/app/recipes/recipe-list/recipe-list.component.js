"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var recipe_1 = require('../recipe');
var RecipeListComponent = (function () {
    function RecipeListComponent() {
        this.recipes = [];
        this.recipeSelected = new core_1.EventEmitter();
        this.recipe = new recipe_1.Recipe('Dummy', 'Dummy', 'http://thumbs2.ebaystatic.com/d/l225/m/mO6VXtbZOhRiefkRJW6UWBg.jpg');
    }
    RecipeListComponent.prototype.ngOnInit = function () {
    };
    RecipeListComponent.prototype.onSelected = function (recipe) {
        this.recipeSelected.emit(recipe);
    };
    __decorate([
        core_1.Output()
    ], RecipeListComponent.prototype, "recipeSelected", void 0);
    RecipeListComponent = __decorate([
        core_1.Component({
            selector: 'rb-recipe-list',
            templateUrl: './recipe-list.component.html',
            styleUrls: ['./recipe-list.component.css']
        })
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
