import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() greetMessage!: string;
  constructor() {}
  ngOnInit() {}
}
