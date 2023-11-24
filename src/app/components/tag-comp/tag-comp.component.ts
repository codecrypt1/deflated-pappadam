import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'TagComp',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-transparent border-2 border-[#545454] rounded-[60px] text-[#545454] text-2xl text-center py-4 px-10">
      {{text}} 
    </div>
  `,
  styleUrl: './tag-comp.component.css'
})
export class TagCompComponent {
  @Input() text = ''
}
