import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
@Component({
  selector: "rb-products",
  moduleId: module.id,
  templateUrl: "products.component.html"
})
export class ProductsComponent {
  constructor(private repository: ProductRepository) { }
  get products(): Product[] {
    return this.repository.getProducts();
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }
}
