import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabComponentComponent } from './tab-component/tab-component.component';
import { CompanyListComponent } from './company-list/company-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TabComponentComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
