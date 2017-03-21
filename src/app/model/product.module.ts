/**
 * Created by luciano on 15/03/17.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {ProductsComponent} from './products.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [ProductsComponent],
  exports: [ProductsComponent]
})
export class ProductModule {
}
