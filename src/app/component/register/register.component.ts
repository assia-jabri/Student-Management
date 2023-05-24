import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  register(form: NgForm) {
    if (this.email == '') {
      alert('Please Enter Your Email');
      return;
    }
    if (this.password == '') {
      alert('Please Enter Your Password');
      return;
    }
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }

}
