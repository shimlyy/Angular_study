import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, ParentComponent, ChildComponent } from './components';
import { HomeService } from './services';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    ParentComponent,
    ChildComponent
  ],
  providers: [],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
