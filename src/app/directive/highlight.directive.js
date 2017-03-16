"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HighlightDirective = (function () {
    function HighlightDirective() {
        /* constructor(private elementRef: ElementRef, private renderer: Renderer) {
           this.elementRef.nativeElement.style.backgroundColor = 'green';
           this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'red')
         }*/
        this.backgroundColor = 'white';
        this.fontSize = '3em';
    }
    /*  @HostListener('mouseenter') mouseSobre() {
        this.backgroundColor = 'yellow';
      };*/
    /*  @HostListener('mouseenter') mouseSobreFont() {
      this.fontSize= 30;
    };
    @HostListener('mouseleave') mouseleave() {
      this.backgroundColor = 'red';
    };
    @HostBinding('style.backgroundColor') get setColor() {
      return this.backgroundColor;
    }*/
    HighlightDirective.prototype.mouseSobreFont = function () {
        this.fontSize = '5em';
    };
    ;
    HighlightDirective.prototype.mouseFora = function () {
        this.fontSize = '3em';
    };
    ;
    Object.defineProperty(HighlightDirective.prototype, "setFontSize", {
        get: function () {
            return this.fontSize;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostListener('mouseenter')
    ], HighlightDirective.prototype, "mouseSobreFont", null);
    __decorate([
        core_1.HostListener('mouseleave')
    ], HighlightDirective.prototype, "mouseFora", null);
    __decorate([
        core_1.HostBinding('style.font-size')
    ], HighlightDirective.prototype, "setFontSize", null);
    HighlightDirective = __decorate([
        core_1.Directive({
            selector: '[rbHighlight]'
        })
    ], HighlightDirective);
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
