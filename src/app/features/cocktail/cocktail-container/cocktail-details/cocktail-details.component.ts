import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICocktail } from 'src/app/logic/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit, OnDestroy {
  public cocktail: ICocktail;
  public subscription: Subscription = new Subscription();
  constructor(
    private panierService: PanierService,
    private cocktailService: CocktailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      if (this.subscription) {
        // On ne souscrit le flux qu'une fois
        // Cela évite les perte de mémoires
        this.subscription.unsubscribe();
      }
      let cocktail_id: string = data.get('id');
      // On souscrit le flux
      this.subscription = this.cocktailService
        .getCocktail(cocktail_id)
        .subscribe((cocktail) => (this.cocktail = cocktail));
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToPanier(): void {
    this.panierService.addCocktail(this.cocktail);
  }
}
