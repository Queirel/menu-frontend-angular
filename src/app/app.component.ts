import { Component } from '@angular/core';
import { MainViewComponent } from './main-view/main-view.component';
import { EgresosComponent } from './egresos/egresos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EgresosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
