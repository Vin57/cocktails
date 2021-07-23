import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CocktailContainerComponent } from './component/cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './component/cocktail-container/cocktail-details/cocktail-details.component';
import { CoktailFormComponent } from './component/cocktail-container/coktail-form/coktail-form.component';
import { PanierContainerComponent } from './component/panier-container/panier-container.component';

export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  {
    path: 'cocktails',
    component: CocktailContainerComponent,
    children: [
      { path: 'new', component: CoktailFormComponent, pathMatch: 'full' },
      {
        path: ':id/edit',
        component: CoktailFormComponent,
        pathMatch: 'full',
      },
      { path: ':id', component: CocktailDetailsComponent },
      { path: '', redirectTo: '0', pathMatch: 'full' },
    ],
  },
  { path: 'panier', component: PanierContainerComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRouteModule {}
