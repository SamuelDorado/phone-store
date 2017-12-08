import { CommonModule } from '@angular/common';
import { PhoneDetailComponent } from './Phones/components/phoneDetail/phone-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PhonesService } from './services/phones.service';
import { SpinnerComponent } from './root-components/spinner/spinner.component';
import { PhoneListComponent } from './Phones/scenes/phoneList/phone-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './services/spinner-interceptor.service';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { PhoneEffects } from './effects/phoneEffects';

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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PhoneEffects])
  ],
  providers: [
    SpinnerInterceptor,
  {
      provide: HTTP_INTERCEPTORS,
      useExisting: SpinnerInterceptor,
      multi: true
  },
    PhonesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
