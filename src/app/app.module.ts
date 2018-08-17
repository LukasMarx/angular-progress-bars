import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SvgbarComponent } from './svgbar/svgbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    SpinnerComponent,
    SvgbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
