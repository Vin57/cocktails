import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CoktailFormComponent } from './cocktail-container/coktail-form/coktail-form.component';
import { SearchComponent } from 'src/app/component/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { AppRouteModule } from 'src/app/app-route.module';



@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CoktailFormComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRouteModule
  ]
})
export class CocktailModule { }
