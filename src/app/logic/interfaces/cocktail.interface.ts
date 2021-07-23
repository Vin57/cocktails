import { IIngredient } from './ingredient.interface';

export interface ICocktail {
  name: string;
  description: string;
  ingredients: IIngredient[];
  img?: string;

  toString(): string;
}
