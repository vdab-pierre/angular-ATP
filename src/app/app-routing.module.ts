import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopComponent }   from './top.component';
import { PlayersComponent }      from './players.component';
import { PlayerDetailComponent }  from './player-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top',  component: TopComponent },
  { path: 'detail/:id', component: PlayerDetailComponent },
  { path: 'players',     component: PlayersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}