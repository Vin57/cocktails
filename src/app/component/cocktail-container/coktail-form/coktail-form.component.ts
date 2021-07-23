import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailService } from 'src/app/shared/cocktail.service';

@Component({
  selector: 'app-coktail-form',
  templateUrl: './coktail-form.component.html',
  styleUrls: ['./coktail-form.component.scss'],
})
export class CoktailFormComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      img: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.fb.array(
        [
          this.fb.group({
            name: ['', Validators.required],
            quantity: [1, [Validators.required, Validators.min(1)]],
          }),
        ],
        Validators.required
      ),
    });
    this.form.statusChanges.subscribe((data) => {
      console.log(data);
    });
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  findIngredientControl(index: number) {
    return this.ingredients.controls[index];
  }

  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [1, [Validators.required, Validators.min(1)]],
      })
    );
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  submit(): void {
    if (this.form.valid) {
      this.cocktailService.addCocktail(this.form.value);
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    }
  }
}
