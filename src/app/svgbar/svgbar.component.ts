import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svgbar',
  templateUrl: './svgbar.component.html',
  styleUrls: ['./svgbar.component.css']
})
export class SvgbarComponent {
  @Input() value: number = 0;
}
