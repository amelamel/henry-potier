import { NgModule, Optional, SkipSelf, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { CartComponent } from './cart.component';
import { MdButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    RouterModule
  ],
  declarations: [CartComponent]
})
export class CartModule { 
  constructor (@Optional() @SkipSelf() parentModule: CartModule) {
    if (parentModule) {
      throw new Error(
        'sharedItemModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CartModule,
      providers:[ CartService ],
    };
  }
}
