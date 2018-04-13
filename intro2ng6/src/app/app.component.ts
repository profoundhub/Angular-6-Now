import { Component } from '@angular/core';

function log(className) {
  console.log(className);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@log
export class AppComponent {
  title = 'NG 6 Apps';
 
  constructor() {
    console.log("This statement was generated by the constructor ", this.aSimpleMethod(5, 2));
  }

  aSimpleMethod(a, b) {
    console.log("What's the answer?");
    return a*b
  } 
}
