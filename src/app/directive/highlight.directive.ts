import { Directive, ElementRef, HostBinding, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[rbHighlight]'
})
export class HighlightDirective {

  /* constructor(private elementRef: ElementRef, private renderer: Renderer) {
     this.elementRef.nativeElement.style.backgroundColor = 'green';
     this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'red')
   }*/


  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'yellow';
  };
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'red';
  };
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor = 'white';
  constructor() { }
}
