import { ICocktail } from '../interfaces/cocktail.interface';
import { IIngredient } from '../interfaces/ingredient.interface';

export class cocktail implements ICocktail {
  constructor(
    public name: string,
    public description: string,
    public ingredients: IIngredient[],
    public img?: string
  ) {}

  toString(): string {
    return this.name;
  }
}
