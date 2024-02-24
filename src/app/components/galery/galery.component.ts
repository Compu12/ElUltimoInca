import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lightbox, initTE } from 'tw-elements';


@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent {
  ngOnInit() {
    initTE({ Lightbox });
  }
}

