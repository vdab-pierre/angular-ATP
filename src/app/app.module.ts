import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http'

import{InMemoryWebApiModule} from 'angular-in-memory-web-api';
import{InMemoryDataService} from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { PlayerDetailComponent } from './player-detail.component';
import { PlayersComponent } from './players.component';
import { PlayerService } from './player.service';
import { DashboardComponent } from './dashboard.component';
import {PlayerSearchComponent} from './player-search.component';
import{AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingModule,HttpModule,
                    InMemoryWebApiModule.forRoot(InMemoryDataService),
                    ],
  declarations: [ AppComponent,PlayerDetailComponent,PlayersComponent,DashboardComponent,PlayerSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers:[PlayerService]
})
export class AppModule { }