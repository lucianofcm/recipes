import { Directive, ElementRef, HostBinding, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[rbHighlight]'
})
export class HighlightDirective {

  /* constructor(private elementRef: ElementRef, private renderer: Renderer) {
     this.elementRef.nativeElement.style.backgroundColor = 'green';
     this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'red')
   }*/
private backgroundColor = 'white';
private fontSize = '3em';
  
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

  @HostListener('mouseenter') mouseSobreFont() {
    this.fontSize= '5em';
  };
    @HostListener('mouseleave') mouseFora() {
    this.fontSize= '3em';
  };
  @HostBinding('style.font-size') get setFontSize() {
    return this.fontSize;
  }
  
  constructor() { }
}
