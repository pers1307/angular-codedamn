import { Component } from '@angular/core';
import construct = Reflect.construct;

// function log(target, name, descriptor) {
//   console.log(target, name, descriptor);
//   // store the original function in a variable
//   const original = descriptor.value;
//
//   // original();
//
//   // descriptor.value = function () {
//   //     console.log("This func was hacked!");
//   // }
//
//   descriptor.value = function (...args) {
//       console.log("Arg ", args);
//       const result = original.apply(this, args);
//       console.log('result: ', result);
//   }
//
//   return descriptor;
// }

// function log(className) {
//   console.log(className);
//
//   return (...args) => {
//     console.log("arg", args);
//
//     return new className(...args);
//   }
// }

// @log
// class myExampleClass {
//     constructor(arg1, arg2) {
//         console.log("Constructor fired!");
//     }
// }
//
// const cl = new myExampleClass(5, 10);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {

    // output "This func was hacked!"
    // this.aSimpleMethod(5);
  }

  // @log
  // aSimpleMethod(a) {
  //   return a * a;
  // }
}
