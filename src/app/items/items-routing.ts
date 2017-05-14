import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';

const routes: Routes = [
  { path: '', component: ItemsComponent }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
