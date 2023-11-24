import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TagCompComponent } from '../../components/tag-comp/tag-comp.component';
import { NftBoxComponent } from '../../components/nft-box/nft-box.component';
import { DropDownComponent } from '../../components/drop-down/drop-down.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { Router } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,NavbarComponent,TagCompComponent,NftBoxComponent,DropDownComponent,FooterComponent],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent implements OnInit {

  constructor(public router: Router) { }
  ngOnInit(): void {
    AOS.init({
      
    });
  }
  
  redirectToContribute() {
    this.router.navigate(['/contribute']);
  }

}
