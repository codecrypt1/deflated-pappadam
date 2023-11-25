import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex w-full px-10 py-8 justify-between bg-[#d5ff3f] items-center "
    >
      <div class="w-[50%] text-2xl text-black font-bold">HearUs.</div>
      <div
        class="w-[40%] flex text-xl font-extralight text-black justify-between"
      >
        
          <a href="#home" class="hover:scale-105 duration-300 cursor-pointer"
            >Home</a
          >
          <a href="#about" class="hover:scale-105 duration-300 cursor-pointer"
            >About</a
          >
          <a
            href="#Portfolio"
            class="hover:scale-105 duration-300 cursor-pointer"
            >Collections</a
          >
     

        <a
          href="/contribute"
          class="w-[150px] text-xl  text-white bg-black py-1  px-2 border border-black rounded-full items-center justify-center text-center"
        >
          Contribute
        </a>
      </div>
    </div>
  `,
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
