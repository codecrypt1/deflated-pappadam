import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ethers } from 'ethers';

@Component({
  selector: 'app-contribute',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contribute.component.html',
  styleUrl: './contribute.component.css',
})
export class ContributeComponent implements OnInit {
  readonly METAMASK_KEY: string = 'metamask';
  public isIdentified: boolean = false;
  public ethereum: any;
  public isConnected: boolean = false;
  public ownerAddress: string = '';
  public success: boolean = false;
  public error: boolean = false;
  public isMinting: boolean = false;

  readonly CONTRACT_ADDRESS: string =
    '0xD76780E312cAb4202E9F8E66a04e76CBea886D07';
    
  async mintTokens(count: string) {
    this.isMinting = true;
    const provider = new ethers.BrowserProvider(this.ethereum);

    const signer = await provider.getSigner();
    // const keyboardsContract = new ethers.Contract(this.CONTRACT_ADDRESS, );
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

  public async connectMetamask() {
    const accounts = await (window as any).ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];
    this.ownerAddress = account;
    this.connected();
  }
}
