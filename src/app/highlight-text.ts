import { Directive, ElementRef, inject, Input, input } from '@angular/core';

@Directive({
  selector: '[appHighlightText]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  },
})
export class HighlightText {

  private element = inject(ElementRef)
  appHighlightText = input('')

  onMouseEnter() {
    this.highlightText(this.appHighlightText() || "red");
  }

  onMouseLeave() {
    this.highlightText('')
  }

  private highlightText(color:any) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  constructor() {
    this.element.nativeElement.style.backgroundColor = "voilet"
   }

}
