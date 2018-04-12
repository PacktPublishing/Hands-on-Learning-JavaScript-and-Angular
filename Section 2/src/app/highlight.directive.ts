import { Directive, ElementRef } from '@angular/core';

@Directive({
  // default app insertions in name to avoid name collision, this is done by angular framework itself.
  // you can talk about this if time permits. :)
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.backgroundColor= 'aqua';
  }

}
