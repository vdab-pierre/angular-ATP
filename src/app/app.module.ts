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
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import {HeroSearchComponent} from './hero-search.component';
import{AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingModule,HttpModule,
                    InMemoryWebApiModule.forRoot(InMemoryDataService),
                    ],
  declarations: [ AppComponent,HeroDetailComponent,HeroesComponent,DashboardComponent,HeroSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers:[HeroService]
})
export class AppModule { }