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
  ],
  imports: [BrowserModule, AppRouteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
