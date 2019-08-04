import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progress = 0;

  ngOnInit(){
    
    setInterval(() => {
      if(this.progress > 100){
        this.progress = 0;
      }else{
        this.progress++;
      }
    }, 1000)
  }
}
