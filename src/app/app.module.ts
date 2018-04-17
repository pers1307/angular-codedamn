import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
