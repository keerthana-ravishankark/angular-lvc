import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Live Virtual Class';
  message: string = "I am Parent";
  childmessage: string = "I am passed from Parent to child component"
  developerName:string ="Keerthana Ravishankar"
}
