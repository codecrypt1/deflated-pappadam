import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octMail, octMarkGithub } from '@ng-icons/octicons';

@Component({
  selector: 'footer-comp',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  viewProviders: [provideIcons({ octMarkGithub, octMail })],
  template: `
   <footer class="font-Montserrat text-black p-4 text-md bg-[#d5ff3f]">
    <div class="flex justify-between w-full">
    <a href="https://github.com/Deflated-Pappadam" class="flex justify-between items-center">
      <ng-icon name="octMarkGithub"></ng-icon>
      <p class="flex text-xl font-semibold text-center items-center justify-center p-2">Github</p>
      </a>
    <div class="flex justify-between items-center">
    <img width="22" height="22" src="https://img.icons8.com/ios-filled/50/000000/copyright.png" alt="copyright"/>
      <p class="font-semibold text-2xl p-2">deflated pappadam</p>
    </div>
    <a href="mailto:deflatedpappadam@gmail.com" class="flex justify-between items-center">
      <ng-icon name="octMail"></ng-icon>
      <p class="flex text-xl font-semibold text-center items-center justify-center p-2">Email</p>
    </a>
    </div>
   </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
