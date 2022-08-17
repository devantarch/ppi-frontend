import { Component, OnInit } from '@angular/core';
import { PfDataFetchService } from 'src/app/servicios/pf-data-fetch.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  miPortfolio:any;

  constructor(private datosPf:PfDataFetchService) { }

  ngOnInit(): void {
    this.datosPf.obtenerDatos().subscribe(data =>{
        this.miPortfolio=data;
    });
  }

}
