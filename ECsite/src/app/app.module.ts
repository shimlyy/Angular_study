import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule, NotificationInterceptor, ParamInterceptor } from './home';

import localeZh from '@angular/common/locales/zh-Hans';
import { RecommendModule } from './recommend';
import { MyModule } from './my';
import { ChatModule } from './chat';
import { CategoryModule } from './category';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    RecommendModule,
    MyModule,
    ChatModule,
    CategoryModule
  ],
  providers: [
    {
      // 系统提供的 LOCALE_ID 就是一个 InjectionToken
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeZh, 'zh');
  }
}
