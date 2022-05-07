import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginSuscription: Subscription | undefined;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    if(this.loginForm.valid){
      this.loginSuscription = this.authService.login(this.loginForm.value).subscribe({
        next: (data: any) => {
          this.redirectToGui(data.token);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);
        }
      })
    }
  }

  redirectToGui(token: string){
    localStorage.setItem('token_user_logged', token)
    this.router.navigate(['/gui']);
  }

  ngOnDestroy(){
    this.loginSuscription?.unsubscribe();
  }

}
