import { NgModule } from '@angular/core';
// import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemComponent } from "./item.component";
import { routing } from './item.routing'
import { MdCardModule, MdSelectModule, MdButtonModule, MdTabsModule, MdDialog, MdDialogRef, MdSnackBarModule } from '@angular/material';
import { FormsModule } from "@angular/forms";
import { CartModule } from "app/shared/cart/cart.module";

@NgModule({
  imports: [
    routing,
    CommonModule,
    MdCardModule,
    MdSelectModule,
    FormsModule,
    MdButtonModule,
    MdTabsModule,
    MdSnackBarModule
  ],
  declarations: [
    ItemComponent
  ],
})
export class ItemModule { }
