import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from './player';

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
  add(nameElm: HTMLInputElement, countryElm: HTMLInputElement, ageElm: HTMLInputElement, pointsElm: HTMLInputElement, tournsElm: HTMLInputElement): void {
    //to do: values checken
    this.playerService.create(nameElm.value.trim(), countryElm.value.trim(), parseInt(ageElm.value), parseInt(pointsElm.value), parseInt(tournsElm.value))
      .then(player => {
        this.players.push(player);
        this.selectedPlayer = null;
      });
      nameElm.value="";
      countryElm.value="";
      ageElm.value="";
      pointsElm.value="";
      tournsElm.value="";
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
