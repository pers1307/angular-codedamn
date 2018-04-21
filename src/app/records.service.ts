import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  obj: Array<Object>
}

@Injectable()
export class RecordsService {

  constructor(
      private http: HttpClient
  ) { }

  public getData() {
    return [
        {
            name: 'Yuri',
            online: true
        },
        {
            name: 'Yuri 2',
            online: false
        },
        {
            name: 'Yuri 3',
            online: true
        },
    ];
  }

  public getDataFromHttp() {
    return this.http.get<myData>('')
        .subscribe(data => {
          console.log(data);
        });
  }
}
