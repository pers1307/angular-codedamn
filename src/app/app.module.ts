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
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  // для компонент, директив, пайпов и прочих независимых кусков кода
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    ReversePipe,
    AdminComponent,
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
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'admin',
            component: AdminComponent
        }
    ])
  ],
  // для сервисов
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
