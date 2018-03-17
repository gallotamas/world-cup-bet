import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { RootComponent } from './core/root/root.component';
import { reducers, effects, CustomSerializer, State } from './core/store';
import { environment } from '../environments/environment';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'betting' },
  { path: 'betting', loadChildren: './betting/betting.module#BettingModule' },
];

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [RootComponent]
})
export class AppModule { }
