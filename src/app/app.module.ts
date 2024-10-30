import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';
import { TipOptionsComponent } from './components/tip-options/tip-options.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputComponent,
    LabelComponent,
    TipOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
