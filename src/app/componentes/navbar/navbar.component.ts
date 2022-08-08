import { Component, OnInit } from '@angular/core';
import { PfDataFetchService } from 'src/app/servicios/pf-data-fetch.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private datosPf:PfDataFetchService) { }

  ngOnInit(): void {
    this.datosPf.obtenerDatos();
  }

}
