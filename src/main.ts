import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { PracticaComponent } from './app/practica/practica.component';
import { ListaComponent } from './app/lista/lista.component';
import { ParentComponent } from './app/parent/parent.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PlatziComponent } from './app/platzi/platzi.component';
@Component({
  selector: 'app-root',
  imports: [
    PracticaComponent,
    ListaComponent,
    ParentComponent,
    PlatziComponent,
  ],
  standalone: true,
  template: `
    <!--<app-practica></app-practica>
    <app-lista></app-lista>
      <app-parent></app-parent>-->
    <app-platzi></app-platzi>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideHttpClient(withFetch())],
});
