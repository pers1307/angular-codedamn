import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { RecordsService } from './records.service';
import { HttpClientModule } from '@angular/common/http';
import { AsyncComponent } from './async/async.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { RouterModule } from '@angular/router';

@NgModule({
  // для компонент, директив, пайпов и прочих независимых кусков кода
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    HelloComponent,
    AsyncComponent
  ],
  // импортятся модули
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {
            path: 'data',
            component: DataComponent
        },
        {
          path: '',
          component: HomeComponent
        }
    ])
  ],
  // для сервисов
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
