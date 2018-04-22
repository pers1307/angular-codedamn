import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appRedblack]'
})
export class RedblackDirective {

  constructor(
      private el: ElementRef
  ) {
    el.nativeElement.style.color = "while";
    el.nativeElement.style.backgroundColor = "black";
  }
}
