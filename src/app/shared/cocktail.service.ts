import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CocktailFixtures } from '../logic/fixtures/cocktails.fixtures';
import { ICocktail } from '../logic/interfaces/cocktail.interface';
import { tap, filter, map, first } from 'rxjs/operators';
const HTTP_API = 'cocktails';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<ICocktail[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    // To initialize project for tests
    // this.seed();
  }

  getCocktail(searched_id: string): Observable<ICocktail> {
    return this.cocktails$.pipe(
      filter((cocktails: ICocktail[]) => cocktails !== null),
      map((cocktails: ICocktail[]) => {
        return cocktails.filter((cocktail: ICocktail) => {
          return cocktail._id === searched_id;
        })[0];
      })
    );
  }

  public fetchCocktails(): Observable<ICocktail[]> {
    return this.http
      .get<ICocktail[]>(`https://restapi.fr/api/${HTTP_API}`)
      .pipe(
        // Tap ne fait rien, ce qui permet d'effectuer une action
        // sans influer sur le retour.
        tap((cocktails: ICocktail[]) => {
          this.cocktails$.next(cocktails);
        })
      );
    // C'est une bonne pratique de ne pas subscribe directement
    // aux call http depuis les services.
    // Il faut subscribe aux Observable retourné par le service
    // directement depuis les components
  }

  addCocktail(cocktail: ICocktail): Observable<ICocktail> {
    return this.http
      .post<ICocktail>(`https://restapi.fr/api/${HTTP_API}`, cocktail)
      .pipe(
        tap((addedCoktail: ICocktail) => {
          const value = this.cocktails$.value;
          this.cocktails$.next([...value, addedCoktail]);
        })
      );
    // C'est une bonne pratique de ne pas subscribe directement
    // aux call http depuis les services.
  }

  /**
   * Edit a {@see ICocktail} instance.
   * @param editedCocktail
   */
  editCocktail(editedCocktail: ICocktail) {
    console.log(editedCocktail);

    return this.http
      .patch<ICocktail>(
        `https://restapi.fr/api/${HTTP_API}/${editedCocktail._id}`,
        editedCocktail
      )
      .pipe(
        tap((persistedEditedCocktail: ICocktail) => {
          const value = this.cocktails$.value;
          value.map((cocktail: ICocktail) => {
            if (cocktail._id === persistedEditedCocktail._id) {
              return persistedEditedCocktail;
            } else {
              return cocktail;
            }
          });
        })
      );
  }

  public seed() {
    CocktailFixtures.loadCocktails().map((cocktail) => {
      this.http
        .post(`https://restapi.fr/api/${HTTP_API}`, cocktail)
        .subscribe();
    });
  }
}
