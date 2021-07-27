import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectedDirective } from './directive/selected.directive';
import { HeaderComponent } from './component/header/header.component';
import { AppRouteModule } from './app-route.module';
import { HttpClientModule } from '@angular/common/http';
import { CocktailModule } from './features/cocktail/cocktail.module';
import { PanierModule } from './features/panier/panier.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectedDirective
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    HttpClientModule,
    CocktailModule,
    PanierModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
