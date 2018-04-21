import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get('')
        .subscribe(data => {
          console.log(data);
        });
  }
}
