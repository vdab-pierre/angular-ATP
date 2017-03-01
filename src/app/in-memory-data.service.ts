import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let players = [
      {id: 11, name: 'Andy Murray',country:'United States',age:29,points:11540,tournsPlayed:17},
      {id: 12, name: 'Novak Djokovic',country:'Serbia',age:29,points:9735,tournsPlayed:16},
      {id: 13, name: 'Gael Monfils',country:'France',age:30,points:3190,tournsPlayed:17},
      {id: 14, name: 'Stan Wawrinka',country:'Suisse',age:31,points:5195,tournsPlayed:19},
      {id: 15, name: 'Milos Raonic',country:'Canada',age:26,points:5080,tournsPlayed:20},
      {id: 16, name: 'Kei Nishikori',country:'Japan',age:27,points:4730,tournsPlayed:20},
      {id: 17, name: 'Rafael Nadal',country:'Spain',age:30,points:4115,tournsPlayed:14},
      {id: 18, name: 'Jo-Wilfried Tsonga',country:'France',age:31,points:3480,tournsPlayed:1618},
      {id: 19, name: 'Marin Cilic',country:'Croatia',age:28,points:3410,tournsPlayed:20},
      {id: 21, name: 'Dominic Thiem',country:'Austria',age:23,points:3375,tournsPlayed:28},
      {id: 22, name: 'Roger Federer',country:'Suisse',age:35,points:3260,tournsPlayed:14},
      {id: 23, name: 'David Goffin',country:'Belgium',age:26,points:3245,tournsPlayed:24},
      {id: 24, name: 'Grigor Dimitrov',country:'Bulgaria',age:25,points:2925,tournsPlayed:24}
    ];
    return {players};
  }
}