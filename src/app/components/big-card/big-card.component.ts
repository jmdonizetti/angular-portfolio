import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string =""
  @Input()
  cardDescription:string =""
}
