import { NgModule, Optional, SkipSelf, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './item.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
// sahred module is created in order to make itemService shared between component
export class SharedItemModule { 
  constructor (@Optional() @SkipSelf() parentModule: SharedItemModule) {
    if (parentModule) {
      throw new Error(
        'sharedItemModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedItemModule,
      providers:[ItemService],
    };
  }
}