import { Routes } from "@angular/router";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { CocktailDetailsComponent } from "./cocktail-container/cocktail-details/cocktail-details.component";
import { CoktailFormComponent } from "./cocktail-container/coktail-form/coktail-form.component";

export const APP_COCKTAIL_ROUTES: Routes = [{
  path: '',
  component: CocktailContainerComponent,
  children: [
    { path: 'new', component: CoktailFormComponent },
    {
      path: ':id/edit',
      component: CoktailFormComponent
    },
    { path: ':id', component: CocktailDetailsComponent },
    { path: '', redirectTo: '/cocktails/', pathMatch: 'full' },
  ],
}];
