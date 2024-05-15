import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'mv-back-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss'
})
export class BackButtonComponent {

  location = inject( Location );

  goBack(){
    this.location.back();
  }

}
