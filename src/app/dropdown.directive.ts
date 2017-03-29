import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  private isOPen = false;

  @HostBinding('class.open') get opened() {
    return this.isOPen;
  }

  @HostListener('mouseover') open() {
    this.isOPen = true;
  }

  @HostListener('mouseleave') close() {
    this.isOPen = false;
  }

}
