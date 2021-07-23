import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectedDirective } from './directive/selected.directive';
import { HeaderComponent } from './component/header/header.component';
import { CocktailListComponent } from './component/cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './component/cocktail-container/cocktail-details/cocktail-details.component';
import { PanierContainerComponent } from './component/panier-container/panier-container.component';
import { CocktailContainerComponent } from './component/cocktail-container/cocktail-container.component';
import { PanierDetailsComponent } from './component/panier-container/panier-details/panier-details.component';
import { AppRouteModule } from './app-route.module';
import { CoktailFormComponent } from './component/cocktail-container/coktail-form/coktail-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CbPipe } from './pipe/cb.pipe';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    SelectedDirective,
    PanierContainerComponent,
    PanierDetailsComponent,
    CoktailFormComponent,
    CbPipe,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRouteModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
