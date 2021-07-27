import { NgModule } from '@angular/core';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CoktailFormComponent } from './cocktail-container/coktail-form/coktail-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_COCKTAIL_ROUTES } from './cocktail.routes';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CoktailFormComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(APP_COCKTAIL_ROUTES)
  ]
})
export class CocktailModule { }
