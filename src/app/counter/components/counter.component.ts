import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent {
  public title: string = 'Mi primera app en Angular 17';
  public counter: number = 10;

  increaseBy(value: number): void{
    this.counter += value;
  }

  resetCounter(): void {this.counter = 0;}
}
