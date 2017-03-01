"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
//imports for loading & configuring the in memory web-api
//Using standard Angular provider registration techniques, the InMemoryWebApiModule replaces the default XHRBackend service with its own in-memory alternative. 
//At the same time, the forRoot method initializes the in-memory web API with the seed data from the mock hero dataset.
//The forRoot method name is a strong reminder that you should only call the InMemoryWebApiModule once, while setting the metadata for the root AppModule. Don't call it again.
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
var app_component_1 = require('./app.component');
var player_detail_component_1 = require('./player-detail.component');
var players_component_1 = require('./players.component');
var player_service_1 = require('./player.service');
var dashboard_component_1 = require('./dashboard.component');
var player_search_component_1 = require('./player-search.component');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            ],
            declarations: [app_component_1.AppComponent, player_detail_component_1.PlayerDetailComponent, players_component_1.PlayersComponent, dashboard_component_1.DashboardComponent, player_search_component_1.PlayerSearchComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [player_service_1.PlayerService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map