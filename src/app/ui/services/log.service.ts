import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private _showLogBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showLogObservable$: Observable<boolean> = this._showLogBehaviorSubject.asObservable();

  private logArray: string[] = [];
  private _logArrayBehaviorSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  logArrayObservable$: Observable<string[]> = this._logArrayBehaviorSubject.asObservable();

  constructor() { }

  logIsOpen(){
    return this.showLogObservable$;
  }

  toggleLog(toggle: boolean) {
    this._showLogBehaviorSubject.next(toggle);
  }

  addDataLog(textLog: string) {
    this.logArray.push(textLog);
    this._logArrayBehaviorSubject.next(this.logArray);
  }

}
