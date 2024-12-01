import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { PipegresoPipe } from './pipegreso.pipe';

@Component({
  selector: 'app-egresos',
  standalone: true,
  imports: [UpperCasePipe, PipegresoPipe],
  templateUrl: './egresos.component.html',
  styleUrl: './egresos.component.css'
})
export class EgresosComponent {
mensaje: string = 'mensaje'
}
