import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  public myVar = 'red';
  public bitwiseOR = 2 | 5; // binary or
  public i = 0;
  public inputValue = 'test!';
  public text = '';
  public records = [];

  constructor(
      private recordService: RecordsService
  ) { }

  ngOnInit() {
    this.records = this.recordService.getData();
  }

    /**
     * Angular will call 4 times this function !!!
     */
  doSomeHeavyTask() {
    console.log(`Called ${this.i++} times`);
  }

  myClickfunction() {
    console.log('myClickfunction called');
  }

  updateTextValue(e) {
    this.text = e.target.value;
  }
}
