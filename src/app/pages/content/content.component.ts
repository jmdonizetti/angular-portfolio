import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  photoCover:string = "https://i0.wp.com/fiosdenylon.com.br/wp-content/uploads/2017/09/super-mario.jpg?resize=1010%2C1515"
  contentTitle:string = "About"
  contentDescription:string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum corrupti sit quia illum consectetur tempora vel voluptatum voluptatibus consequuntur veniam dolorum, rem voluptates, itaque eligendi, at laborum a deleniti sunt."

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
   this.route.paramMap.subscribe( value =>
    console.log(value.get("id"))
   )
  }
}
