# lesson 1
## Async and Await

Promise Case
```typescript
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
```

Http Case
```typescript
  async getAsyncData() {
      this.asyncResult = await this.httpClient.get<Employee>(this.url).toPromise();
      console.log('No issues, I will wait until promise is resolved..');
    }
```

# lesson 2
## install Angular 2

// install

npm install -g @angular/cli@latest

// ng version
ng -v

// create new project
ng new intro2angular

// up server
ng serve

# lesson 3
## architecture

# lesson 4
## decorators
Это по сути обертка над объектом, которая позволяет делать что либо, до выполнения функции или инициализации класса.

# lesson 5
## Lifecycle Hooks

[<img src="https://www.tutorialspoint.com/angular2/images/lifecycle.jpg">](https://www.tutorialspoint.com/angular2/angular2_lifecycle_hooks.htm)

* Following is a description of each lifecycle hook.
* ngOnChanges − When the value of a data bound property changes, then this method is called.
* ngOnInit − This is called whenever the initialization of the directive/component after Angular first displays the data-bound properties happens.
* ngDoCheck − This is for the detection and to act on changes that Angular can't or won't detect on its own.
* ngAfterContentInit − This is called in response after Angular projects external content into the component's view.
* ngAfterContentChecked − This is called in response after Angular checks the content projected into the component.
* ngAfterViewInit − This is called in response after Angular initializes the component's views and child views.
* ngAfterViewChecked − This is called in response after Angular checks the component's views and child views.
* ngOnDestroy − This is the cleanup phase just before Angular destroys the directive/component.

# lesson 6
## Components

// generate component
ng generate component hello

# lesson 7
## Interpolation and Expressions

# lesson 8
## Data Binding (One way) в одну сторону

``` js
public inputValue = 'test!';
```

Подходит для вывода информации
```html
<input type="text" value="{{inputValue}}">
```

Подходит для изменения значения атрибута.
Это зависит от интерполяции
```html
<input type="text" [value]="inputValue" [disabled]="{{inputValue}}">
```

[] - Это связка из компонента в шаблон
```html
<input type="text" [value]="inputValue">
```

() - связка из шаблона в компонент
```html
<button (click)="myClickfunction()">Hey There!</button>
```

# lesson 9
## Two way data binding (связка в обе стороны)

```typescript
  public text = '';

  updateTextValue(e) {
    this.text = e.target.value;
  }
```

```html
<input type="text" [value]="text" (input)="updateTextValue($event)">
<br>
{{ text }}
```
# lesson 10
##  Looping with *ngFor

```html
<table>
  <tr>
    <td>№</td>
    <td>Name</td>
    <td>Is online?</td>
  </tr>
  <tr
          *ngFor="let record of records; let myIndex = index; let evenRecord = even; let oddRecord = odd, let firstRecodr = first, let lastRecond = last"
          [ngClass]="{odd : oddRecord, even : evenRecord, first : firstRecodr, last : lastRecond}"
  >
    <td>{{ myIndex + 1 }}</td>
    <td>{{ record.name }}</td>
    <td>{{ record.online }}</td>
  </tr>
</table>
```

# lesson 11
## Services

Module
```typescript
@NgModule({
  // для компонент, директив, пайпов и прочих независимых кусков кода
  declarations: [
    AppComponent,
    HelloComponent
  ],
  // импортятся модули
  imports: [
    BrowserModule,
    FormsModule
  ],
  // для сервисов
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
// create service
ng g service records

Service
```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class RecordsService {

  constructor() { }

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
}
```

Component
```typescript
constructor(
      private recordService: RecordsService
  ) { }

  ngOnInit() {
    this.records = this.recordService.getData();
  }
```

# lesson 12
## HTTP Requests

Module
```typescript
// импортятся модули
  imports: [
    HttpClientModule
  ],
```

Service
```typescript
public getDataFromHttp() {
    return this.http.get('')
        .subscribe(data => {
          console.log(data);
        });
  }
```

# lesson 13
## Configure Proxy for API calls

Позволяет на уровне конфига вебпака переопределять пути
То есть не нужно будет менять пути к апи в коде
Нужно будет их поменять в конфиг файле

# lesson 14
## Routing

