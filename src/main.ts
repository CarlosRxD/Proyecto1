import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { PracticaComponent } from './app/practica/practica.component';
import { ListaComponent } from './app/lista/lista.component';
import { ParentComponent } from './app/parent/parent.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PlatziComponent } from './app/platzi/platzi.component';
import { routes } from './app/app.routes';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './app/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [
    PracticaComponent,
    ListaComponent,
    ParentComponent,
    PlatziComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FooterComponent
  ],
  standalone: true,
  templateUrl: 'main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes,withComponentInputBinding()),provideHttpClient(withFetch())],
});
