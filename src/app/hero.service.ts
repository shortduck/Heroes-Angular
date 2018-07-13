import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {Hero} from './Hero';
import {HEROES} from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

//  getHeroes(): Hero[]{
//    return HEROES;
//  }

  getHeroes(): Observable<Hero[]> {
  return of(HEROES);
}

  constructor() { }
}