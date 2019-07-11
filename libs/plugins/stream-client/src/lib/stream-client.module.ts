import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { StreamService } from './core';
import { StreamDesignerComponent } from './stream-designer';
import { StreamDataResolver } from './stream-data.resolver';
import { streamReducer } from './core/state/stream.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('stream', streamReducer),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: StreamDesignerComponent, resolve: {streamData: StreamDataResolver} },
    ]),
  ],
  providers: [StreamService, StreamDataResolver],
  declarations: [StreamDesignerComponent],
})
export class StreamClientModule {}
