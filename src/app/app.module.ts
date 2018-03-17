import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { TabComponentComponent } from './tab-component/tab-component.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyTableComponent } from './company-table/company-table.component';
import { ModalComponent } from './modal/modal.component';

import { CompanyService } from './services/company.service';
import { ProductInfoComponent } from './product-info/product-info.component'

@NgModule({
  declarations: [
    AppComponent,
    TabComponentComponent,
    CompanyListComponent,
    CompanyTableComponent,
    ModalComponent,
    ProductInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
