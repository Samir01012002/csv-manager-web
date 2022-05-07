import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AuthRoutingModule } from './ui-routing.module';
import { CsvListComponent } from './components/csv-list/csv-list.component';
import { CsvItemComponent } from './components/csv-item/csv-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UploadCsvComponent } from './components/upload-csv/upload-csv.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    CsvListComponent,
    CsvItemComponent,
    NavbarComponent,
    UploadCsvComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule
  ]
})
export class UiModule { }
