import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/modelos/skill';
import { SkillService } from 'src/app/servicios/skill.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) {}

  isLogged = false;
  
  ngOnInit(): void {

    this.cargarSKills();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged=false;
    }
  }

  cargarSKills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      })
  }

  delete(id?: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSKills();
        }, err => {
          alert ("No se pudo borrar la skill")
        }
      )
    }
  }
}

/*     constructor(private datosPf:PfDataFetchService) { }

  /* ngOnInit(): void {
    this.datosPf.obtenerDatos().subscribe(data =>{
      this.skillsList=data.skills;      
    });
  } */ 


