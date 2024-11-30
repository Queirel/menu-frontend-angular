import { Component } from '@angular/core';
import { ItemsModel } from '../models/items.model';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css',
})
export class MainViewComponent {
  users!: any;

  constructor(userService: UsersService) {
    userService.getUsuarios().subscribe((data) => {
      this.users = data;
    });
  }
}
