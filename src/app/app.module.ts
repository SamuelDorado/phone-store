import { CommonModule } from '@angular/common';
import { PhoneDetailComponent } from './Phones/components/phoneDetail/phone-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PhonesService } from './services/Phones/phones.service';
import { PhonesStore } from './services/Phones/phones.store';
import { PhonesDispatcher } from './services/Phones/phones.dispatcher';
import { SpinnerComponent } from './root-components/spinner/spinner.component';
import { PhoneListComponent } from './Phones/scenes/phoneList/phone-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './services/SpinnerInterceptor/spinner-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    SpinnerInterceptor,
  {
      provide: HTTP_INTERCEPTORS,
      useExisting: SpinnerInterceptor,
      multi: true
  },
    PhonesService,
    PhonesDispatcher,
    PhonesStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
