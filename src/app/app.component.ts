import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { HistoryComponent } from './components/history/history.component';
import { GaleryComponent } from './components/galery/galery.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { ProcessComponent } from './components/process/process.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroSectionComponent,
    ProductsComponent,
    ContactComponent,
    HistoryComponent,
    GaleryComponent,
    TestimoniesComponent,
  ProcessComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'El Ultimo Inca';
}
