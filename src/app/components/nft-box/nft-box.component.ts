import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'NftBox',
  standalone: true,
  imports: [CommonModule],
  template: `

    <div
      class="group md:min-w-[10rem] max-w-[20rem] bg-[#292929] hover:bg-[#3d3d3d] flex flex-col border-2  border-black m-10  w-full h-full rounded-2xl overflow-hidden "
    >
      <div class="img w-[120%] h-[80%] bg-black overflow-hidden  ">
        <div
          class="group-hover:scale-[150%] ease-in-out duration-1000  transition-all"
        >
          <img
            src="../../assets/bg.jpg"
            width="{500}"
            height="{400}"
            alt=""
            className="h-[100%] w-[150%]"
          />
        </div>
      </div>
      <div
        class="  flex  justify-between items-center "
      >
        <div class="flex items-center rounded-b-md p-4 text-white text-2xl">
          Moonshot # 225
        </div>
        <div class="border border-white p-1 text-white items-center  rounded-lg m-2">#800</div>
      </div>
      <div class="border-white px-5 pb-2 text-white items-center ">008 ETH</div>
    </div>


  `,
  styleUrl: './nft-box.component.css',
})
export class NftBoxComponent {}
