import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider [];
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  constructor(private rd2: Renderer2) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewChecked(): void {
    // this.imgs.forEach(item => item.nativeElement.style.height = '100px'); 直接操作DOM
    this.imgs.forEach(item => {
      this.rd2.setStyle(item.nativeElement, 'height', '100px');
    });
  }

}
