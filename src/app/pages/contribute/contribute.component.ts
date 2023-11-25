import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { N,ethers } from 'ethers';
import { provideIcons } from '@ng-icons/core';
import { octNorthStar, octStar } from '@ng-icons/octicons';
import Tone from '../../../../artifacts/contracts/Tone.sol/Tone.json'


@Component({
  selector: 'app-contribute',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contribute.component.html',
  styleUrl: './contribute.component.css',
  viewProviders: [provideIcons({ octNorthStar, octStar })]
})

export class ContributeComponent implements OnInit {

 
  
  private checkIfMetamaskInstalled(): boolean {
    if (typeof (window as any).ethereum !== 'undefined') {
      this.ethereum = (window as any).ethereum;
      return true;
    }
    return false;
  }

  private connected() {
    this.isConnected = true;
  }

  onBlur(event: any) {
    console.log("blurred");
    this.amount.nativeElement.focus()
  }

  public async connectMetamask() {
    const accounts = await (window as any).ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];
    this.ownerAddress = account;
    this.connected();
  }

  constructor() {}
  ngOnInit() {
    if (this.checkIfMetamaskInstalled()) {
      this.isIdentified = true;
      if (this.isConnected) {
        this.connected();
      }
      if (this.ethereum) {
        this.connectMetamask();
      }
    }
  }
  

  @ViewChild('amount', { static: false })
  amount!: ElementRef;

  readonly METAMASK_KEY: string = 'metamask';
  public isIdentified: boolean = false;
  public ethereum: any;
  public isConnected: boolean = false;
  public ownerAddress: string = '';
  public toneAbi = Tone.abi;
  public success: boolean = false;
  public error: boolean = false;
  public isMinting: boolean = false;

  readonly CONTRACT_ADDRESS: string =
    '0x35b6C7A2796CA18a7D589b8DE1b75Be2a6f0a79F';
    
  async mintTokens(amount: number) {
    this.isMinting = true;
    const provider = new ethers.BrowserProvider(this.ethereum);

    const signer = await provider.getSigner();
    const toneContract = new ethers.Contract(this.CONTRACT_ADDRESS, this.toneAbi, signer);

    try {
      let amt = 0;
      if (amount) amt = amount;
      let len = amt.toString().length;
      let cost = "0." + "0".repeat(10 - len!) + amt.toString();      
      const response = await toneContract['mint'](BigInt(Math.floor(amt / 100)),
      {
        value: ethers.parseEther(cost),
        
      }
      );
      console.log("response: ", response);
      this.isMinting = false;
      this.success = true;
    } catch (error) {
      console.log(error);
      this.isMinting = false;
      this.success = false;
      this.error = true;
    }
  }

  setSuccess(state:boolean) {
    this.success = state;
  }
  
 

  

  
}
