import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ICocktail } from 'src/app/logic/interfaces/cocktail.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  public search: string = '';
  @Input() public cocktails: ICocktail[];
  public users$: Observable<string[]> = this.userService.users$;
  public subscription = new Subscription();
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
