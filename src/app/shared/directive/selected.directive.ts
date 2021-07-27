import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appSelected]',
})
export class SelectedDirective implements OnChanges {
  @Input('appSelected') public isSelected: boolean;
  @HostBinding('style.backgroundColor') private bColor: string;
  @HostBinding('style.color') private color: string;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.isSelected) {
      this.bColor = 'var(--primary)';
      this.color = 'var(--lightgray)';
    } else {
      this.bColor = 'white';
      this.color = 'var(--text-regular)';
    }
  }
}
