import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([
    'Julie',
    'Paul',
    'Marco',
    'Antoine',
  ]);
  constructor() {}
}
