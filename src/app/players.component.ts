import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from './player';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[];
  selectedPlayer: Player;

  constructor(private router: Router, private heroService: HeroService) { }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.players = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.players.push(hero);
        this.selectedPlayer = null;
      });
  }

  delete(player: Player): void {
    this.heroService
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
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPlayer.id]);
  }
}
