import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]',
})
export class GridItemImageDirective {
  @Input() appGridItemImage = '2rem';
  constructor(private elr: ElementRef, private rd2: Renderer2) {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image');
    this.rd2.setStyle(this.elr.nativeElement, 'width', this.appGridItemImage);
    this.rd2.setStyle(this.elr.nativeElement, 'height', this.appGridItemImage);
    this.rd2.setStyle(this.elr.nativeElement, 'object-fit', 'cover');
   }

 }
