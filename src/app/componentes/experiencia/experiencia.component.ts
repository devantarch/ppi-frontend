import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
// import { PfDataFetchService } from 'src/app/servicios/pf-data-fetch.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) {}

  isLogged = false;
  
    ngOnInit(): void {
      this.cargarExperiencia();
      if(this.tokenService.getToken()){
        this.isLogged= true;
      }else{
        this.isLogged=false;
      }
    }  

    cargarExperiencia(): void {
      this.experienciaService.lista().subscribe(data => {this.expe = data;})
    }

  }

  


/*   experienciaList:any;
  constructor(private datosPf:PfDataFetchService) { }

  ngOnInit(): void {
    this.datosPf.obtenerDatos().subscribe(data =>{
    this.experienciaList=data.experiencia;
  });
} */
