import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private logServiceSuscription: Subscription;
  logIsOpen: boolean = false;

  constructor(private logService: LogService) {
    this.logServiceSuscription = this.logService.showLogObservable$.subscribe(data => {
      this.logIsOpen = data;
    })
  }

  ngOnInit(): void {
  }

  toggleLog(){
    this.logService.toggleLog(!this.logIsOpen);
  }

  ngOnDestroy(){
    this.logServiceSuscription.unsubscribe();
  }



}
