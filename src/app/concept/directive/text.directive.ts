import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[textDirective]'
})
export class TextDirective {

  constructor(elt: ElementRef) {
    elt.nativeElement.innerText = "This text is inserted by custom directive.";
  }

}
