import { NavbarService } from './../navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.sass']
})
export class Pagina3Component implements OnInit {
  constructor(public nav: NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }

}
