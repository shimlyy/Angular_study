import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent } from './components';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParamInterceptor, NotificationInterceptor } from './interceptors';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
