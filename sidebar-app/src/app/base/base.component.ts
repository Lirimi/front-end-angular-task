import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: '',
})
export abstract class BaseComponent {
  isDestroyed: Subject<boolean> = new Subject();

  ngOnDestroy(): void {
    this.isDestroyed.next(true);
    this.isDestroyed.complete();
  }
}
