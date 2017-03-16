"use strict";
mport;
{
    async, ComponentFixture, TestBed;
}
from;
'@angular/core/testing';
var products_component_1 = require('./products.component');
describe('ProductsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [products_component_1.ProductsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(products_component_1.ProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
