import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http'

//imports for loading & configuring the in memory web-api
//Using standard Angular provider registration techniques, the InMemoryWebApiModule replaces the default XHRBackend service with its own in-memory alternative. 
//At the same time, the forRoot method initializes the in-memory web API with the seed data from the mock hero dataset.
//The forRoot method name is a strong reminder that you should only call the InMemoryWebApiModule once, while setting the metadata for the root AppModule. Don't call it again.

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