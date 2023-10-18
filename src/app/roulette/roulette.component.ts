import { Component, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.less']
})
export class RouletteComponent {
  isSpinning: boolean = false;

  constructor() { }

  spinWheel() {
    if (!this.isSpinning) {
      this.isSpinning = true;
      // Simulate a spin by adding and removing the "spinning" class
      setTimeout(() => {
        this.isSpinning = false;
        const result = Math.floor(Math.random() * 37);
        alert(`The ball landed on ${result}`);
      }, 5000); // 5 seconds (must match the animation duration)
    }
  }
}
