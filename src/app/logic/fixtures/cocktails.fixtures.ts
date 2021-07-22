import { ICocktail } from '../interfaces/cocktail.interface';
import { cocktail } from '../objects/cocktail.class';
import { Ingredient } from '../objects/ingredient.class';

let cocktails: ICocktail[] = [
  new cocktail(
    'Martini',
    '« Martini, shaken, not stirred », comme disait James Bond. Ce cocktail aurait été inventé après l’importation du vermouth italien Martini aux États-Unis. Un barman l’aurait alors mélangé à du gin, créant ainsi le cocktail le plus connu du monde.',
    [
      new Ingredient('Perrier', 12),
      new Ingredient('Martini ingr 1', 62),
      new Ingredient('Martini ingr 2', 52),
      new Ingredient('Martini ingr 3', 96),
    ],
    'https://boiremixologie.com/files/medias/_thumb/capture-ecran-martini.jpg'
  ),
  new cocktail(
    'Margarita',
    'La margarita est un cocktail rafraichissant à base de tequila inventée en 1948 par Margaret Sames, d’où le nom (Margarita est la traduction en espagnol du prénom Margaret). Fait intéressant : la margarita est le cocktail le plus commandé en Amérique du Nord.',
    [
      new Ingredient('Fleurs', 12),
      new Ingredient('Margarita ingr 1', 62),
      new Ingredient('Margarita ingr 2', 52),
      new Ingredient('Margarita ingr 3', 96),
    ],
    'https://boiremixologie.com/files/medias/_thumb/margarita.jpg'
  ),
  new cocktail(
    'Old Fashioned',
    'Abordant d’abord le nom de Whiskey Cocktail, ce classique a été créé par un barman du Pendennis Club au Kentucky, qui ajouta du sucre au whiskey en l’honneur du Colonel James E. Pepper. Ce dernier apporta ensuite la recette au Waldorf-Astoria Hotel de New York. Le reste appartient à l’histoire.',
    [
      new Ingredient('Eau', 12),
      new Ingredient('Old fashioned ingr 1', 62),
      new Ingredient('Old fashioned ingr 2', 52),
      new Ingredient('Old fashioned ingr 3', 96),
    ],
    'https://boiremixologie.com/files/medias/_thumb/Old-fashioned.jpg'
  ),
];

export class CocktailFixtures {
  static loadCocktails(): ICocktail[] {
    return cocktails;
  }
}
