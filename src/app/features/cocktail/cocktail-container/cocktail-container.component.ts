import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICocktail } from 'src/app/logic/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit {
  public cocktails$: Observable<ICocktail[]> = this.cocktailService.cocktails$;
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {}
}
