import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Hero} from './Hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //  getHeroes(): Hero[]{
  //    return HEROES;
  //  }

  getHeroes(): Observable<Hero[]> {

    this.messageService.add('Hero Service: fetched Heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(public messageService: MessageService) {}


}


