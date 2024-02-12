import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ListComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  // Property
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  // Method, si "public" mayormente no pongo "public"
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void{
    this.name = 'Batman';
  }

  changeAge(): void{
    this.age = 70;
  }

  resetForm(): void{
    this.name = 'Ironman';
    this.age = 45;
  }

}
