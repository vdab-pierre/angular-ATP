import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { PlayerSearchService } from './player-search.service';
import { Player } from './player';
@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css'],
    providers: [PlayerSearchService]
})
export class PlayerSearchComponent implements OnInit {
    heroes: Observable<Player[]>;
    private searchTerms = new Subject<string>();
    constructor(
        private playerSearchService: PlayerSearchService,
        private router: Router) { }
    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.playerSearchService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<Player[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Player[]>([]);
            });
    }
    gotoDetail(player: Player): void {
        let link = ['/detail', player.id];
        this.router.navigate(link);
    }
}