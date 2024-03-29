import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal, Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  ngOnInit() {
    initTE({ Modal, Ripple })
  }
}
