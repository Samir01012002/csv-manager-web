import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Csv } from '../interfaces/cvs';
import { BehaviorSubject, Observable } from 'rxjs';
import { LogService } from './log.service';
import { CONSTANTS } from './../../global/constans'
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  private csvs: Csv[] = [];
  private _csvsBehaviorSubject: BehaviorSubject<Csv[]> = new BehaviorSubject<Csv[]>([]);
  csvsObservable$: Observable<Csv[]>;

  constructor(private http: HttpClient, private logService: LogService, private authService: AuthService) {
    this.csvsObservable$ = this._csvsBehaviorSubject.asObservable();
    this.getCsvs().subscribe({
      next: (data) => {
          this._csvsBehaviorSubject.next(data);
          this.csvs = data;
      },
      error: (err: HttpErrorResponse) => {
        if(err.status == 401){
          this.authService.logout();
        }
        this.logService.addDataLog(`${err.error.message} - (${new Date().toISOString().split("T")[0]})`)
        this.logService.toggleLog(true)
      },
    })
  }

  private getCsvs() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `${this.authService.getTokenUser()}`
      })
    };
    return this.http.get<Csv[]>(`${CONSTANTS.URL_BASE_API}/csv`, httpOptions);
  }

  uploadFile(formData: FormData){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `${this.authService.getTokenUser()}`
      })
    };
    return this.http.post(`${CONSTANTS.URL_BASE_API}/csv`, formData, httpOptions).subscribe({
      next: (data: any) => {
        this.logService.addDataLog(`Subido ${data.data._id} - (${new Date().toISOString().split("T")[0]})`)
        this.loadObservableData();
      },
      error:(err: HttpErrorResponse ) => {

        if(err.status == 401){
          this.authService.logout();
        }

        this.logService.addDataLog(`${err.error.message} - (${new Date().toISOString().split("T")[0]})`)
        this.logService.toggleLog(true)
      }
    });
  }

  private loadObservableData(){
    this.getCsvs().subscribe(data => {
      this._csvsBehaviorSubject.next(data);
      this.csvs = data;
    })
  }
}
