import { Csv } from './../../interfaces/cvs';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-csv-item',
  templateUrl: './csv-item.component.html',
  styleUrls: ['./csv-item.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CsvItemComponent implements OnInit {

  @Input() item: any | Csv = {
    csv: {
      name: '',
      data: []
    },
    createdAt: ''
  };

  constructor(private config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  csvDetails(content:any){
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
