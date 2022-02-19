import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTreeModule } from '@angular/material/tree';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ApiModule } from '../api';
import { CardComponent } from './components/card/card.component';
import { CommuneDetailComponent } from './components/commune-detail/commune-detail.component';
import { GeoComponent } from './components/geo/geo.component';
import { TreeComponent } from './components/tree/tree.component';
import { TreeEffects } from './store/geo.effects';
import { featureKey, geoReducer } from './store/geo.reducer';

@NgModule({
  declarations: [GeoComponent, TreeComponent, CardComponent, CommuneDetailComponent],
  exports: [],
  imports: [
    ApiModule,
    CommonModule,
    StoreModule.forFeature(featureKey, geoReducer),
    EffectsModule.forFeature([TreeEffects]),

    MatTreeModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class GeoModule {}
