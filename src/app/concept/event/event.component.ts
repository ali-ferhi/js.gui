import { Component } from '@angular/core';

@Component({
  templateUrl: './event.component.html'
})
export class EventComponent {

  x?: number;
  y?: number;

  onClick(event: MouseEvent) {
    this.x = event.pageX;
    this.y = event.pageY;
  }

}
