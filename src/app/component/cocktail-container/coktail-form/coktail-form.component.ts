import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ICocktail } from 'src/app/logic/interfaces/cocktail.interface';
import { IIngredient } from 'src/app/logic/interfaces/ingredient.interface';
import { CocktailService } from 'src/app/shared/cocktail.service';

@Component({
  selector: 'app-coktail-form',
  templateUrl: './coktail-form.component.html',
  styleUrls: ['./coktail-form.component.scss'],
})
export class CoktailFormComponent implements OnInit {
  public form: FormGroup;
  public cocktail: ICocktail;

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('id');
      if (index !== null) {
        this.cocktail = this.cocktailService.getCocktail(
          Number.parseInt(index)
        );
      }
      this.initForm(this.cocktail);
    });
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  findIngredientControl(index: number) {
    return this.ingredients.controls[index];
  }

  initForm(
    cocktail: ICocktail = {
      name: '',
      img: '',
      description: '',
      ingredients: [{ name: '', quantity: 1 }],
    }
  ) {
    this.form = this.fb.group({
      name: [cocktail.name, [Validators.required, Validators.maxLength(100)]],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description, Validators.required],
      ingredients: this.fb.array(
        cocktail.ingredients.map((ingredient) =>
          this.initIngredientFormGroup(ingredient)
        ),
        Validators.required
      ),
    });
  }

  /**
   * Add a new {@see FormGroup} for a {@see IIngredient}
   * element.
   * @returns FormGroup
   */
  initIngredientFormGroup(
    ingredient: IIngredient = { name: '', quantity: 1 }
  ): FormGroup {
    return this.fb.group({
      name: [ingredient.name, Validators.required],
      quantity: [ingredient.quantity, [Validators.required, Validators.min(1)]],
    });
  }

  addIngredientFormGroup(): void {
    this.ingredients.push(this.initIngredientFormGroup());
  }

  removeIngredientFormGroup(index: number): void {
    this.ingredients.removeAt(index);
  }

  submit(): void {
    if (this.form.valid) {
      if (this.cocktail) {
        this.cocktailService.editCocktail(this.cocktail.name, this.form.value);
      } else {
        this.cocktailService.addCocktail(this.form.value);
      }

      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    }
  }
}
