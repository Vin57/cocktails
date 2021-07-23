import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CocktailFixtures } from '../logic/fixtures/cocktails.fixtures';
import { ICocktail } from '../logic/interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<ICocktail[]> = new BehaviorSubject(
    CocktailFixtures.loadCocktails()
  );

  constructor() {}

  getCocktail(index: number): ICocktail {
    return this.cocktails$.value[index];
  }

  addCocktail(cocktail: ICocktail): void {
    this.cocktails$.next([...this.cocktails$.value, cocktail]);
  }
}
