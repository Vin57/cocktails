import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/logic/objects/ingredient.class';
import { PanierService } from 'src/app/shared/panier.service';

@Component({
  selector: 'app-panier-container',
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.scss'],
})
export class PanierContainerComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[];
  public subscription: Subscription = new Subscription();
  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.panierService.ingredients$.subscribe(
        (data) => (this.ingredients = data)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
