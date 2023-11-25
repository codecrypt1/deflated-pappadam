import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'NftBox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      class="group md:min-w-[10rem] max-w-[20rem] max-h-[20rem] bg-[#292929] hover:bg-[#3d3d3d] flex flex-col border-2  border-black m-10  w-full h-full rounded-2xl overflow-hidden "
      href="https://testnets.opensea.io/collection/hearus?search[sortAscending]=false&search[sortBy]=CREATED_DATE"
    >
      <div class="img w-[100%] h-[180%] bg-black overflow-hidden  ">
        <div
          class="group-hover:scale-[150%] ease-in-out duration-1000  transition-all"
        >
          <audio
            class="hidden"
            id="player"
            #audio
            src="{{ audio_src }}"
          ></audio>
          <img
            (mouseover)="playAudio()"
            (mouseleave)="pauseAudio()"
            src="{{ url }}"
            width="{900}"
            height="{900}"
            alt=""
            className="h-[150%] w-[150%]"
          />
        </div>
      </div>
      <div class="  flex  justify-between items-center ">
        <div class="flex items-center rounded-b-md p-4 text-white text-2xl">
          {{ Name }}
        </div>
        <div
          class="border border-white p-2 px-3  text-white items-center  rounded-lg m-2 "
        >
          #{{ Id }}
        </div>
      </div>
      <div class="border-white px-5 pb-2 text-gray-400 items-center text-lg">
        {{ Price }}
      </div>
    </a>
  `,
  styleUrl: './nft-box.component.css',
})
export class NftBoxComponent {
  @Input() Name: string = 'Whispers In The Rain';
  @Input() Id: string = 'oXoX';
  @Input() Price: string = 'XXX';
  @Input() url: string =
    'https://storage.googleapis.com/here-us-ebe72.appspot.com/Image/0.png';
  @Input() audio_src: string =
    'https://storage.googleapis.com/here-us-ebe72.appspot.com/music/0.wav';
  @ViewChild('audio') audioPlayerRef!: ElementRef;

  playAudio() {
    this.audioPlayerRef.nativeElement.play();
  }

  pauseAudio() {
    this.audioPlayerRef.nativeElement.pause();
  }
}
