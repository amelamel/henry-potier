import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { SharedItemModule } from "./shared/item/shared-item.module";
import { CartModule } from "app/shared/cart/cart.module";
import { MdButtonModule } from '@angular/material';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    MdButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedItemModule.forRoot(),
    CartModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
