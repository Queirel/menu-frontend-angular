import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-calcu',
  standalone: true,
  imports: [HijoComponent, FormsModule],
  templateUrl: './calcu.component.html',
  styleUrl: './calcu.component.css',
})
export class CalcuComponent {
mensajeParaElPadre: string = 'Mensaje desde el hijo'

  mensajeInput! :string
  mensajeDesdePadreParaElHijo: string = 'Mensaje desde el padre'

  recibirMensajeDeHijo(mensaje:string){
    this.mensajeParaElPadre = mensaje
  }

  pasar(){

    this.mensajeDesdePadreParaElHijo = this.mensajeInput
    this.mensajeInput = ''
    }

}
