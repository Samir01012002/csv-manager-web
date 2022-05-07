import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Csv } from '../../interfaces/cvs';
import { CsvService } from '../../services/csv.service'

@Component({
  selector: 'app-csv-list',
  templateUrl: './csv-list.component.html',
  styleUrls: ['./csv-list.component.scss']
})
export class CsvListComponent implements OnInit {

  items: Csv[] = [];
  csvServiceSuscription: Subscription | undefined;

  constructor(private csvService: CsvService) { }

  ngOnInit(): void {
    this.csvServiceSuscription = this.csvService.csvsObservable$.subscribe(data => {
      this.items = data;
    })
  }

  ngOnDestroy(): void {
    this.csvServiceSuscription?.unsubscribe();
  }

}
