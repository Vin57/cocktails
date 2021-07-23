import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ICocktail } from 'src/app/logic/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit, OnDestroy {
  public search: string = '';
  public cocktails: ICocktail[];
  public subscription: Subscription = new Subscription();
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe({
        next: (coktails: ICocktail[]) => (this.cocktails = coktails),
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
