import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border-y-2 px-20 py-20 h-full">
      <div class="flex justify-between">
        <h1 class="text-[#a2a2a2] text-3xl font-bold">Some Header</h1>
        <button> click me</button>
      </div>
      <p class="text-2xl text-[#545454] w-[70%] pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
      architecto similique, laborum placeat praesentium impedit ipsa aperiam
      repellat, molestias reiciendis id ullam? Sit ea deserunt, provident
      vitae dicta veniam minus.</p>
    </div>
  `,
  styleUrl: './drop-down.component.css'
})
export class DropDownComponent {

}
