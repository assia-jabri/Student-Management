import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email : string = '' ;
  constructor(private auth : AuthService){}

  forgotPassword(form: NgForm){
    this.auth.forgotPassword(this.email);
    this.email = '';

  }

}
