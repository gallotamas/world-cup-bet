import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { reducers, effects, CustomSerializer, CoreState } from './core/store';
import { environment } from '../environments/environment';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

export const metaReducers: MetaReducer<object>[] = !environment.production ? [storeFreeze] : [];

// containers
import * as fromContainers from './core/containers';

// guards
import * as fromGuards from './core/guards';

// services
import * as fromServices from './core/services';

// routes
export const ROUTES: Routes = [
  { path: 'login', component: fromContainers.LoginComponent },
  {
    path: '', canActivate: [fromGuards.AuthGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'betting' },
      { path: 'betting', loadChildren: './betting/betting.module#BettingModule' }
    ]
  }
];

@NgModule({
  declarations: [
    ...fromContainers.containers
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    StoreModule.forRoot({}, { metaReducers }),
    StoreModule.forFeature('core', reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    fromServices.services,
    fromGuards.guards
  ],
  bootstrap: [fromContainers.RootComponent]
})
export class AppModule { }
