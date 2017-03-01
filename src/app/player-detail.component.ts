import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Player } from './player'
import { PlayerService } from './player.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'player-detail.component.html',
  styleUrls: ['player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  @Input()
  player: Player;
  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.playerService.getPlayer(+params['id']))
      .subscribe(player => this.player = player);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.playerService.update(this.player)
      .then(() => this.goBack());
  }
}