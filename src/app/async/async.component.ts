import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  constructor() { }

    async ngOnInit() {
    // this.resolveAfter2Seconds(10);

    // this.resolveAfter2Seconds(10).then(value => {
    //     console.log(`promise result: ${value}`);
    // });
    //
    // // Этот код выполняется сразу
    // console.log('After 10 sec');
    // console.log('I will not wait until promise is resolved');

    this.ff();
  }

  async ff() {
      const result = <number>await this.resolveAfter2Seconds(10);
      console.log('After 10 sec', result);
  }

  resolveAfter2Seconds(x) {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve(x);
              console.log('!!!');
          }, 2000);
      });
  }

}
