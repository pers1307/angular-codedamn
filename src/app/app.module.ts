import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { RecordsService } from './records.service';
import { HttpClientModule } from '@angular/common/http';
import { AsyncComponent } from './async/async.component';

@NgModule({
  // для компонент, директив, пайпов и прочих независимых кусков кода
  declarations: [
    AppComponent,
    HelloComponent,
    AsyncComponent
  ],
  // импортятся модули
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  // для сервисов
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
