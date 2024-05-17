import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css',
})
export class AlumnoComponent {
  @Input() id: string = '';
  public listaUsers: ListaAlumnos = new ListaAlumnos();
  public frmPS!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frmPS = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  public agregar(): void {
    this.listaUsers.agregar(
      new Alumno(
        parseInt(this.frmPS.get('id')?.value),
        this.frmPS.get('name')?.value
      )
    );
  }
  public eliminar(i: number): void {
    this.listaUsers.eliminar(i);
  }
}
class Alumno {
  public id!: number;
  public name: String = '';
  constructor(id: number, name: String) {
    this.id = id;
    this.name = name;
  }
}

class ListaAlumnos {
  public users: Alumno[] = [];
  constructor() {
    this.get();
  }
  public agregar(user: Alumno) {
    this.users.push(user);
    this.save();
  }
  public eliminar(index: number) {
    this.users.splice(index, 1);
    this.save();
  }
  public save() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  public get() {
    const userFromLocalS = JSON.parse(localStorage.getItem('users')!);
    this.users.splice(0);
    for (let user of userFromLocalS) {
      this.users.push(new Alumno(user.id, user.name));
    }
  }
}