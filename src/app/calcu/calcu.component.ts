import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './hijo/hijo.component';
import { ServiceService } from '../service.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-calcu',
  standalone: true,
  imports: [HijoComponent, FormsModule],
  templateUrl: './calcu.component.html',
  styleUrl: './calcu.component.css',
})
export class CalcuComponent {
  
  products!: Product[]
  productInput!: string
  priceInput!: number
  
  constructor(
    private productService: ServiceService,
  ){}
  
  ngOnInit(){
    this.products = this.productService.productos
  }
  
  agregar(){
    const newProduct: Product = new Product(this.productInput, this.priceInput)
    // this.products.push(newProduct)
    this.productService.agregarProducto(newProduct)
  }





}
