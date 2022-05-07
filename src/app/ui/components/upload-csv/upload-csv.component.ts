import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CsvService } from '../../services/csv.service'

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.scss']
})
export class UploadCsvComponent implements OnInit {

  private file: File | null = null;
  csvServiceSuscription: Subscription | undefined;

  constructor(private csvService: CsvService) { }

  ngOnInit(): void {
  }

  selectFile(event: any){
    this.file = event.target.files[0];
  }

  uploadCsv(){
    if(this.file){
      let form = new FormData();
      form.append("file", this.file, this.file.name)
      this.csvServiceSuscription = this.csvService.uploadFile(form);
    }

  }

  ngOnDestroy() {
    this.csvServiceSuscription?.unsubscribe();
  }

}
