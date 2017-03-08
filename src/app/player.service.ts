import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Player } from './player';

@Injectable()
export class PlayerService {
    private playersUrl = 'api/players';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getPlayers(): Promise<Player[]> {
        return this.http.get(this.playersUrl)
            .toPromise()
            .then(response => (response.json().data as Player[]).sort(function(a,b){return b.points - a.points}))
            .catch(this.handleError);
    }

   

    getPlayer(id: number): Promise<Player> {
        const url = `${this.playersUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Player)
            .catch(this.handleError);
    }

    create(name: string,country:string,age:number,points:number,tourns:number): Promise<Player> {
        return this.http
            .post(this.playersUrl, JSON.stringify({ name: name ,country: country,age:age,points:points,tournsPlayed:tourns}), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.playersUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    update(player: Player): Promise<Player> {
        const url = `${this.playersUrl}/${player.id}`;
        return this.http
            .put(url, JSON.stringify(player), { headers: this.headers })
            .toPromise()
            .then(() => player)
            .catch(this.handleError);
    }
}