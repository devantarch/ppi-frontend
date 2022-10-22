import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PfDataFetchService } from 'src/app/servicios/pf-data-fetch.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
persona: persona = new persona("","","","","","");

constructor(public personaService: PersonaService, private tokenService: TokenService){}
isLogged = false;

ngOnInit(): void {  
 this.cargarPersona();
 if(this.tokenService.getToken()){
  this.isLogged = true;
} else {
  this.isLogged = false;
}
}

cargarPersona(){
  this.personaService.detail(1).subscribe(data =>
    {this.persona = data})
}




  /*   miPortfolio:any;

  constructor(private datosPf:PfDataFetchService) { }

  ngOnInit(): void {
    this.datosPf.obtenerDatos().subscribe(data =>{
        this.miPortfolio=data;
    });
  } */

}
