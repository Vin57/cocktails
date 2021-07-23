import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICocktail } from 'src/app/logic/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails: ICocktail[];

  ngOnInit(): void {}
}
