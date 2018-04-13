import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor)

  // store the original function in a var. 
  const original = descriptor.value;

  // do some manipulations with the descriptor.value
  descriptor.value = () => {     
    console.error("How was this Hacked?")
  }

  // return the descriptor
  original();
  return descriptor;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'NG 6 Apps';
 
  constructor() {
    this.aSimpleMethod()
  }

  @log
  aSimpleMethod() {
    console.log("Hello?")
  }
}
