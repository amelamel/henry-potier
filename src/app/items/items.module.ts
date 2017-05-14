import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { DataListModule, DataGridModule , PanelModule} from 'primeng/primeng';
import { ItemService } from '../shared/item/item.service';
import { MdCardModule, MdButtonModule, MdIconModule, MdInputModule, MdSliderModule } from '@angular/material';
import { routing } from './items-routing';

@NgModule({
  imports: [
    routing,
    CommonModule,
    DataListModule,
    DataGridModule,
    PanelModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSliderModule
  ],
  declarations: [
     ItemsComponent
  ],  
})
export class ItemsModule { }
