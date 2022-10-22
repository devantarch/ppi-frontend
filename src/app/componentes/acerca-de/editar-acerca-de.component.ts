import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  Persona: persona = null;

  constructor(
    private personaService: PersonaService,
    private activatedRoute : ActivatedRoute,
    private router: Router
    ) {} 

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {this.Persona = data;
      }, err => {
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
      )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id,this.Persona).subscribe(
      data => {
        this.router.navigate([''])
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }
}
