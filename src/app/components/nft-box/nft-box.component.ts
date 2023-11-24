import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'NftBox',
  standalone: true,
  imports: [CommonModule],
  template: `

    <div
      class="group md:min-w-[10rem] max-w-[20rem] max-h-[20rem] bg-[#292929] hover:bg-[#3d3d3d] flex flex-col border-2  border-black m-10  w-full h-full rounded-2xl overflow-hidden "
    >
      <div class="img w-[100%] h-[180%] bg-black overflow-hidden  ">
        <div
          class="group-hover:scale-[150%] ease-in-out duration-1000  transition-all"
        >
          <img
            src="../../assets/bg.jpg"
            width="{900}"
            height="{900}"
            alt=""
            className="h-[150%] w-[150%]"
          />
        </div>
      </div>
      <div
        class="  flex  justify-between items-center "
      >
        <div class="flex items-center rounded-b-md p-4 text-white text-3xl">
         {{Name}}
        </div>
        <div class="border border-white p-2 text-white items-center  rounded-lg m-2 ">#{{Id}}</div>
      </div>
      <div class="border-white px-5 pb-2 text-white items-center text-xl">{{Price}}ETH</div>
    </div>


  `,
  styleUrl: './nft-box.component.css',
})
export class NftBoxComponent {
  @Input() Name :string ="Item 01"
  @Input() Id :string  ="oXoX"
  @Input() Price :string  ="091"
 
}
