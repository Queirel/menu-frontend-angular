import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Services1Service {

nombrePadre?: string
nombreHijo?: string

setNombrePadre = (nombrePadre:string) =>{
  this.nombrePadre = nombrePadre
}
setNombreHijo = (nombreHijo:string) =>{
  this.nombreHijo = nombreHijo
}

getNombrePadre = (): string => {
 return this.nombrePadre || ''
}

getNombreHijo = (): string => {
 return this.nombreHijo || ''
}

holaPadre = (nombre: string): void => {
 console.log(`Hola ${nombre}`)
}

  constructor() { }
}
