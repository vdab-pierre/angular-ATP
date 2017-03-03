import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from './player';
import { PlayerDetailComponent } from './player-detail.component';
import { PlayerService } from './player.service';
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'players.component.html',

})
export class PlayersComponent implements OnInit {

  players: Player[];
  selectedPlayer: Player;

  constructor(private router: Router, private playerService: PlayerService) { }

  getPlayers(): void {
    this.playerService.getPlayers().then(players => this.players = players);
  }
  add(name: string,country:string): void {
    name = name.trim();
    if (!name) { return; }
    this.playerService.create(name,country)
      .then(player => {
        this.players.push(player);
        this.selectedPlayer = null;
      });
  }

  delete(player: Player): void {
    this.playerService
      .delete(player.id)
      .then(() => {
        this.players = this.players.filter(h => h !== player);
        if (this.selectedPlayer === player) { this.selectedPlayer = null; }
      });
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  ngOnInit(): void {
    this.getPlayers();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPlayer.id]);
  }
}
