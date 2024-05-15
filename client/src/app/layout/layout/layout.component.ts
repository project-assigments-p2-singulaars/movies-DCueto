import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../../home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mv-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
