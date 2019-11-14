import { Component, OnInit, Input, ElementRef, Renderer2, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

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
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHight = '160px';
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId;
  // @ViewChildren('img') imgs: QueryList<ElementRef>;

  constructor(private rd2: Renderer2) { }
  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    // this.imgs.forEach(item => item.nativeElement.style.height = '100px'); 直接操作DOM
    // this.imgs.forEach(item => {
    //   this.rd2.setStyle(item.nativeElement, 'height', '150px');
    // });
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        (this.getIndex(++this.selectedIndex % this.sliders.length) *
        this.imgSlider.nativeElement.scrollWidth) / this.sliders.length
          );
    }, this.intervalBySeconds * 1000);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getIndex(idx: number): number {
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }


  handleScroll(ev) {
    const ratio =
    (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }

}
