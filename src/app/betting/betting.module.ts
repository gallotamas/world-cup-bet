import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

// containers
import * as fromContainers from './containers';

// services
import * as fromServices from './services';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('betting', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers],
  exports: [...fromContainers.containers],
})
export class BettingModule {}
