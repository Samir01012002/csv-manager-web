import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  private logServiceIsOpenSuscription: Subscription;
  private logServiceDataLogSuscription: Subscription;
  logIsOpen: boolean = false;
  logData: string[] = [];

  constructor(private logService: LogService) {

    this.logServiceIsOpenSuscription = this.logService.showLogObservable$.subscribe(data => {
      this.logIsOpen = data;
    })
    this.logServiceDataLogSuscription = this.logService.logArrayObservable$.subscribe(data => {
      this.logData = data;
    })
  }

  ngOnInit(): void {
    /* setInterval(() => {
      console.log('Hola')
    }, 5000); */
  }

  ngOnDestroy(){
    this.logServiceIsOpenSuscription.unsubscribe();
    this.logServiceDataLogSuscription.unsubscribe();
  }

}
