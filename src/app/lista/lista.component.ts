import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  public listaUsers: ListaUsuarios=new ListaUsuarios;
  public frmPS!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frmPS = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  public agregar(): void {
    this.listaUsers.agregar(
      new Usuario(
        parseInt(this.frmPS.get('id')?.value),
        this.frmPS.get('name')?.value
      )
    );
  }
  public eliminar(i: number): void {
    this.listaUsers.eliminar(i);
  }
}

class Usuario {
  public id!: number;
  public name: String = '';
  constructor(id: number, name: String) {
    this.id = id;
    this.name = name;

  }
}

class ListaUsuarios {
  public users: Usuario[] = [];
  constructor() {
    this.get();
  }
  public agregar(user: Usuario) {
    this.users.push(user);
    this.save();
  }
  public eliminar(index:number) {
    this.users.splice(index, 1);
    this.save();
  }
  public save() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }
  public get() {
    const userFromLocalS = JSON.parse(localStorage.getItem("users")!);
    this.users.splice(0);
    for (let user of userFromLocalS) {
      this.users.push(new Usuario(user.id, user.name));
    }
  }
}
