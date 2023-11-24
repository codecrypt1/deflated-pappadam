import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'footer-comp',
  standalone: true,
  imports: [CommonModule],
  template: `
   <footer class="font-Montserrat text-black px-2 text-md bg-[#d5ff3f]">
    <div class="flex justify-between w-full">
    <a href="https://github.com/Deflated-Pappadam" class="flex justify-between">
    <img width="20" height="20" src="https://img.icons8.com/material-sharp/24/github.png" alt="github"/>
      <p>Github</p>
      </a>
    <div class="flex justify-between">
    <img width="22" height="22" src="https://img.icons8.com/ios-filled/50/000000/copyright.png" alt="copyright"/>
      <p>deflated pappadam</p>
    </div>
    <a href="deflatedpappadam@gmail.com" class="flex justify-between">
      <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/new-post.png" alt="new-post"/>
      <p>Email</p>
    </a>
    </div>
   </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
