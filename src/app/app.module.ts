import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
