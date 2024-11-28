import { Component } from '@angular/core';
import { ItemsModel } from '../models/items.model';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css',
})
export class MainViewComponent {

  itemsIngreso: ItemsModel[] = []
  itemsEgreso: ItemsModel[] = []

  sumarIngresos = () => {
    const total: number = this.itemsIngreso.reduce((acumulador, item) => {
      return acumulador + item.price;
    }, 0);
    return total;
  };
  sumarEgresos = () => {
    const total: number = this.itemsEgreso.reduce((acumulador, item) => {
      return acumulador + item.price;
    }, 0);
    return total;
  };

  totalIngresos: number = this.sumarIngresos();
  totalEgresos: number = this.sumarEgresos();
  totalDisponible: number = this.totalIngresos - this.totalEgresos;
  descriptionInput!: string;
  priceInput!: number;
  resultSelect!: string;

  eliminarEgreso(egreso: ItemsModel){
    const indice: number = this.itemsEgreso.indexOf(egreso);
    this.itemsEgreso.splice(indice, 1);
  }

  // eliminarEgreso = (egreso: ItemsModel) => {
  //   this.itemsEgreso = this.itemsEgreso.filter(item => item !== egreso);
  // }

  eliminarIngreso = (ingreso: ItemsModel) => {
    this.itemsIngreso = this.itemsIngreso.filter(item => item !== ingreso);
  }


  agregar() {
    if (this.resultSelect == 'ingresos') {
      const newItem: ItemsModel = new ItemsModel(
        this.descriptionInput,
        this.priceInput
      );
      this.itemsIngreso.push(newItem);
      this.totalIngresos = this.sumarIngresos();
      this.totalDisponible = this.totalIngresos - this.totalEgresos;
      this.porcentajeEgresos = this.totalEgresos *100 / this.totalDisponible


//       eliminar(item){
// this.itemsEgreso.
//       }

    }
    if (this.resultSelect == 'egresos') {
      const newItem: ItemsModel = new ItemsModel(
        this.descriptionInput,
        this.priceInput
      );
      this.itemsEgreso.push(newItem);
      this.totalEgresos = this.sumarEgresos();
      this.totalDisponible = this.totalIngresos - this.totalEgresos;
      this.porcentajeEgresos = this.totalEgresos *100 / this.totalDisponible

    } else {
      return;
    }
  }

  porcentajeEgresos: number = this.totalEgresos *100 / this.totalDisponible

}
