import { Component, Input, OnInit } from '@angular/core';
import { IIngredient } from 'src/app/logic/interfaces/ingredient.interface';

@Component({
  selector: 'app-panier-details',
  templateUrl: './panier-details.component.html',
  styleUrls: ['./panier-details.component.scss'],
})
export class PanierDetailsComponent implements OnInit {
  @Input() public ingredients: IIngredient[];
  public search: string = "";
  constructor() {}

  ngOnInit(): void {}
}
