import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  productos: Product[] =[
    new Product ('camisa', 542),
    new Product ('mist', 125),
    new Product ('algo', 372),

  ]
  constructor(
  ) { }

  agregarProducto(producto: Product){
    this.productos.push(producto)
  }


}
