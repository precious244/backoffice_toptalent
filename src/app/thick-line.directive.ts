import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'hr[appThickLine]'
})
export class ThickLineDirective {

  constructor() { }
  
  @HostBinding('class.thick-line') hasThickLine = true;
}
