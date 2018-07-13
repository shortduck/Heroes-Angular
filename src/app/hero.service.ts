import { Injectable } from '@angular/core';
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
    
  this.messageService.add('Hero Service: fetched Heroes') ;
  return of(HEROES);
}
  
 constructor(public messageService: MessageService) {}
  
  
}


