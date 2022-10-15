import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  nombreE: string = '';
  cargo : string = '';
  inicio : string = '';
  fin : string = '';
  tareas : string = '';
  url_img : string = '';
  url : string = '';


  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.cargo, this.inicio, this.fin, this.tareas, this.url_img, this.url);
    this.experienciaService.save(expe).subscribe(
      data =>{alert("Experiencia añadida");
      this.router.navigate(['']);
  }, err =>{
    alert("Falló");
    this.router.navigate(['']);  
  }
  )
}
}
