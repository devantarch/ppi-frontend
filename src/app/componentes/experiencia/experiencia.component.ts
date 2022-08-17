import { Component, OnInit } from '@angular/core';
import { PfDataFetchService } from 'src/app/servicios/pf-data-fetch.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaList:any;
  constructor(private datosPf:PfDataFetchService) { }

  ngOnInit(): void {
    this.datosPf.obtenerDatos().subscribe(data =>{
    this.experienciaList=data.experiencia;
  });
}

}
