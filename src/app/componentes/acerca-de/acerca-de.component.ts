import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PfDataFetchService } from 'src/app/servicios/pf-data-fetch.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
persona: persona = new persona("","","","","","");

constructor(public personaService: PersonaService){}

ngOnInit(): void {  
  this.personaService.getPersona().subscribe(data => {this.persona = data})
}





  /*   miPortfolio:any;

  constructor(private datosPf:PfDataFetchService) { }

  ngOnInit(): void {
    this.datosPf.obtenerDatos().subscribe(data =>{
        this.miPortfolio=data;
    });
  } */

}
