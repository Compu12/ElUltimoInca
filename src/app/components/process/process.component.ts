import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stepper, initTE } from 'tw-elements';


@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent {

  ngOnInit(){
    initTE({ Stepper });
  }
}
