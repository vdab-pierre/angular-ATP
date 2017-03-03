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
var router_1 = require('@angular/router');
var player_service_1 = require('./player.service');
var PlayersComponent = (function () {
    function PlayersComponent(router, playerService) {
        this.router = router;
        this.playerService = playerService;
    }
    PlayersComponent.prototype.getPlayers = function () {
        var _this = this;
        this.playerService.getPlayers().then(function (players) { return _this.players = players; });
    };
    PlayersComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.playerService.create(name)
            .then(function (player) {
            _this.players.push(player);
            _this.selectedPlayer = null;
        });
    };
    PlayersComponent.prototype.delete = function (player) {
        var _this = this;
        this.playerService
            .delete(player.id)
            .then(function () {
            _this.players = _this.players.filter(function (h) { return h !== player; });
            if (_this.selectedPlayer === player) {
                _this.selectedPlayer = null;
            }
        });
    };
    PlayersComponent.prototype.onSelect = function (player) {
        this.selectedPlayer = player;
    };
    PlayersComponent.prototype.ngOnInit = function () {
        this.getPlayers();
    };
    PlayersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPlayer.id]);
    };
    PlayersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'players.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, player_service_1.PlayerService])
    ], PlayersComponent);
    return PlayersComponent;
}());
exports.PlayersComponent = PlayersComponent;
//# sourceMappingURL=players.component.js.map