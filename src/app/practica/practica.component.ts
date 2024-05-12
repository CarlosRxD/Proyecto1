import { Component} from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-practica',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css',
})
export class PracticaComponent {
  public txtValor = new FormControl('Hola');
  public numCarrera: number=0;
  public frmPS!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frmPS = this.fb.group({
      matricula: ['', Validators.required],
      email: ['', Validators.required],
      mensaje: ['', Validators.required],
      carrera: ['', Validators.required],
    });
  }
  public mostrarValor(): void {
    alert(this.txtValor.value);
  }
  public actualizarValor(): void {
    this.txtValor.setValue('Hola Mundo Cruel');
  }
  public reset(): void {
    this.txtValor.reset('');
  }
  public onSubmit(): void {
    this.numCarrera=this.frmPS.get('carrera')!.value;
    /*this.frmPS.patchValue({ matricula: '1000' });
    this.frmPS.setValue({
      matricula: '100',
      mensaje: 'hola',
      email: 'holaxD@gmail.com',
    });*/
  }
  public modificarControl(): void {
    let x = this.frmPS.get('email');
    if (x != null) {
      alert(x.value);
      x.setValue('prueba');
    }
  }
  
}
