import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'NG 6 Apps';

  @log
  aSimpleMethod() {
    console.log("Hello?")
  }
}
