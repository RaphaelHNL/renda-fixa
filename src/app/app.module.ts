import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './core/interceptors/interceptor.module';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { MatSnackBarModule } from '@angular/material/snack-bar';


registerLocaleData(localeBr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InterceptorModule,
    MatSnackBarModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
