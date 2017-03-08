import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http'

import{InMemoryWebApiModule} from 'angular-in-memory-web-api';
import{InMemoryDataService} from './in-memory-data.service';

//bootstrap alert import part1
import {AlertModule} from 'ng2-bootstrap';
//import{CollapseModule}from 'ng2-bootstrap';

import { AppComponent }  from './app.component';
import { PlayerDetailComponent } from './player-detail.component';
import { PlayersComponent } from './players.component';
import { PlayerService } from './player.service';
import { TopComponent } from './top.component';
import {PlayerSearchComponent} from './player-search.component';
import{AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingModule,HttpModule,
                    InMemoryWebApiModule.forRoot(InMemoryDataService),
                    //bootstrap alert import part2
                    AlertModule.forRoot(),
                    //CollapseModule
                    ],
  declarations: [ AppComponent,PlayerDetailComponent,PlayersComponent,TopComponent,PlayerSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers:[PlayerService]
})
export class AppModule { }