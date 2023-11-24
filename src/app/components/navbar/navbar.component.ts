import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex w-full px-10 py-8 justify-between bg-[#d5ff3f]">
      <div class="w-[50%] text-2xl text-black font-bold">HEAR US.</div>
      <div class="w-[30%] flex text-xl font-extralight text-black justify-between">
        <div class="hover:scale-105 duration-300 cursor-pointer">Home</div>
        <div class="hover:scale-105 duration-300 cursor-pointer">About</div>
        <div class="hover:scale-105 duration-300 cursor-pointer">Collections</div>
        <div class="hover:scale-105 duration-300 cursor-pointer">Contact Us</div>
      </div>
    </div>
  `,
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
