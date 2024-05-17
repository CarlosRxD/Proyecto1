import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { ParentComponent } from './parent/parent.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MateriasComponent } from './materias/materias.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'alumno/:id', component: AlumnoComponent },
  
];
