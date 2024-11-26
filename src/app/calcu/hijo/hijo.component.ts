import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
@Input() mensajeParaElHijo!: string
@Output() mensajeDesdeHijoParaElPadre = new EventEmitter<string>()

mensajeInput!: string

enviar(){
  this.mensajeDesdeHijoParaElPadre.emit(this.mensajeInput)
  this.mensajeInput = ''
}
}
