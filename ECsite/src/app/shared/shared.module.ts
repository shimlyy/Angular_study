import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ScrollableTabComponent,
  ImageSliderComponent,
  HorizontalGridComponent,
  CountDownComponent,
  FooterComponent,
  VerticalGridComponent,
  ProductCardComponent
} from './components';
import {
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  AvatarDirective,
  TagDirective
} from './directives';
import { AgoPipe } from './pipes';

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
    TagDirective,
    AvatarDirective
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AvatarDirective,
    AgoPipe,
    TagDirective
  ]
})
export class SharedModule {}
