import { Component, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/logic/objects/ingredient.class';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { PanierService } from 'src/app/shared/services/panier.service';
registerLocaleData(localeFr);

@Component({
  selector: 'app-panier-container',
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.scss'],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
})
export class PanierContainerComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[];
  public subscription: Subscription = new Subscription();
  public date: Date = new Date();
  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.panierService.ingredients$.subscribe((data) => {
        this.ingredients = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
