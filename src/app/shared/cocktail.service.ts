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

  /**
   * Edit a {@see ICocktail} instance.
   * @param originalName As the name of the cocktail is the key, we need
   * to keep the original name to find the one which require
   * an update
   * @param editedCocktail
   */
  editCocktail(originalName: string, editedCocktail: ICocktail) {
    this.cocktails$.next(
      this.cocktails$.value.map((cocktail: ICocktail) => {
        if (cocktail.name === originalName) {
          return editedCocktail;
        } else {
          return cocktail;
        }
      })
    );
  }
}
