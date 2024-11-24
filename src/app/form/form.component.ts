import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from './usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(private formBuilder: FormBuilder) {}

  // usuario = new Usuario();
  // apellidos = ['lope', 'otro', 'coso'];

  usuarioForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
  });

  hasErrors(controlName: string, errorType: string) {
    return (
      this.usuarioForm.get(controlName)?.hasError(errorType) &&
      this.usuarioForm.get(controlName)?.touched
    );
  }

  guardar = () => {
    console.log(this.usuarioForm.value);
  };
}
