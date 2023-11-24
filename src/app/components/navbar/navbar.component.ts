import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex w-full px-10 py-8 justify-between">
      <div class="w-[50%] text-2xl text-black font-bold">Something</div>
      <div class="w-[50%] flex text-xl font-extralight text-black justify-between">
        <div>Smthn</div>
        <div>Smthn</div>
        <div>Smthn</div>
        <div>Smthn</div>
      </div>
    </div>
  `,
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
