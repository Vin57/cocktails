import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICocktail } from 'src/app/logic/interfaces/cocktail.interface';
import { cocktail } from 'src/app/logic/objects/cocktail.class';
import { CocktailService } from 'src/app/shared/cocktail.service';
import { PanierService } from 'src/app/shared/panier.service';

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
    this.subscription.add(
      this.route.paramMap.subscribe((data) => {
        let cocktail_id: number = Number.parseInt(data.get('id'));
        this.cocktail = this.cocktailService.getCocktail(cocktail_id);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  editCocktail(cocktail: ICocktail): void {
    this.cocktail.name += '1';
  }

  addToPanier(): void {
    this.panierService.addCocktail(this.cocktail);
  }
}
