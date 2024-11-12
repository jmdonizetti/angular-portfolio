import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css', './menu-bar.animacao.component.css']
})
export class MenuBarComponent {
  @Input()
  Id:string = "0"
}
