import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [ 
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path: 'nuevaexp', component: NuevaExperienciaComponent},
    {path: 'editarexp/:id', component: EditarExperienciaComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
