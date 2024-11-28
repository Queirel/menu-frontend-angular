import { Component } from '@angular/core';
import { MainViewComponent } from './main-view/main-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
