import { Component, OnInit } from '@angular/core';
import { PfDataFetchService } from 'src/app/servicios/pf-data-fetch.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList:any;
  constructor(private datosPf:PfDataFetchService) { }

  ngOnInit(): void {
    this.datosPf.obtenerDatos().subscribe(data =>{
      this.educacionList=data.educacion;
    });
  }

}
