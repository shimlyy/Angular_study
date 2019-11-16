import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]',
})
export class GridItemImageDirective {
  constructor(private elr: ElementRef, private rd2: Renderer2) {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image');
    this.rd2.setStyle(this.elr.nativeElement, '', `'image' 'title'`);
   }

 }
