import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IIngredient } from 'src/app/logic/interfaces/ingredient.interface';
import { cocktail } from 'src/app/logic/objects/cocktail.class';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  public ingredients$: BehaviorSubject<IIngredient[]> = new BehaviorSubject(
    null
  );
  constructor() {}

  public addCocktail(cocktail: cocktail): void {
    const currentValue: IIngredient[] = this.ingredients$.value;
    const givenIngredients = cocktail.ingredients;
    if (currentValue === null) {
      // Default is to add current ingredients list as the first non-null value in array
      this.ingredients$.next(givenIngredients);
      return;
    }

    // Then, we have to merge both, the initial ingredients array with the new given new one
    const mergedIngredients: IIngredient[] = [
      ...currentValue,
      ...givenIngredients,
    ];
    // Then we reduce it to merge the dupplicata into 'quantity' value
    const result = mergedIngredients.reduce((acc, cur) => {
      if (acc[cur.name]) {
        acc[cur.name].quantity += cur.quantity; // Add quantity to clone
      } else {
        acc[cur.name] = { ...cur }; // Clone current object
      }
      return acc;
    }, {});
    // Then we make of the resulting array, an array of object
    const toArrayIngredients = Object.keys(result).map((x) => result[x]);
    this.ingredients$.next(toArrayIngredients);
  }
}
