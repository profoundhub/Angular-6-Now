import { Component } from '@angular/core';

function log(target, name, descriptor) {
  // console.log(target, name, descriptor)

  // store the original function in a var. 
  const original = descriptor.value;

  // do some manipulations with the descriptor.value
  descriptor.value = (...args) => {
    console.log("Arguments ", args, "were passed into this function.");
    const result = original.apply(this, args); 
    console.error("The results of this function is ", result);
    return result;
  }

  // return the descriptor
  // original();
  console.log(target, name, descriptor);
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
    this.aSimpleMethod("This statement was generated by the constructor ", this.aSimpleMethod(5, 2));
  }

  @log
  aSimpleMethod(a, b) {
    // console.log("what's the answer?");
    return a*a
  } 
}
