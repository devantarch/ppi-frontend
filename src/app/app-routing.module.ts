import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAcercaDeComponent } from './componentes/acerca-de/editar-acerca-de.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarSkillComponent } from './componentes/skills/editar-skill.component';
import { NuevaSkillComponent } from './componentes/skills/nueva-skill.component';

const routes: Routes = [ 
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path: 'nuevaexp', component: NuevaExperienciaComponent},
    {path: 'editarexp/:id', component: EditarExperienciaComponent},
    {path: 'nuevaedu', component: NuevaEducacionComponent},
    {path: 'editaredu/:id', component: EditarEducacionComponent},
    {path: 'nuevaskill', component: NuevaSkillComponent},
    {path: 'editarskill/:id', component: EditarSkillComponent},
    {path: 'editaracercade/:id', component: EditarAcercaDeComponent}
    
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
