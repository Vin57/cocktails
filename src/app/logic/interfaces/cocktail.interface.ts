import { IIngredient } from './ingredient.interface';

export interface ICocktail {
  _id?: string;
  name: string;
  description: string;
  ingredients: IIngredient[];
  img?: string;

  toString(): string;
}
