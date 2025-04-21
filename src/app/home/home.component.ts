import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../custom-button/custom-button.component'; // justera path vid behov

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'Min Angular App';
  count = 0;

  updateCount(newCount: number) {
    this.count = newCount;
  }
}
