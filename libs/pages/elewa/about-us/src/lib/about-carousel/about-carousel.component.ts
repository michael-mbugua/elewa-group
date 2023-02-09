import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-about-carousel',
  templateUrl: './about-carousel.component.html',
  styleUrls: ['./about-carousel.component.scss'],
})


export class AboutCarouselComponent {
  @Input() year ="2015";
  @Input()title ="Lorem Ipsum"
  @Input() history = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laborum molestiae labore itaque dolores magni, sed incidunt eius sequi architecto vitae delectus corporis accusamus porro assumenda amet sit excepturi cumque impedit nisi quia dolorem? Placeat ratione illum eos possimus cum quasi necessitatibus, dolorem dolore fugit veritatis, error tempore deserunt iure!"
 
}
