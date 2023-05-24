import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  //login method
  login(email: string, password: string) {


    //store it in the browser's local storage 
    // the user will remain loggedin while navigation multiple pages 
    // if we remove it it won't be able to remain logged in 
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['dashboard']);
    }, err => {
      alert('something went wrong!');
      this.router.navigate(['/login']);
    })
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Resgistration successful');
      this.router.navigate(['login']);
    }, err => {
      alert('something went wrong!');
      this.router.navigate(['/register']);
    })
  }

  //remove item from localstorage after logging out 
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message)
    })
  }


  //forgot password 
    
  forgotPassword(email: string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(["verify-email"]);
    }, err => {
      alert("something went wrong")
    })
  }

  //email verification

  sendEmailForVarification(user : any){
    user.sendEmailForVarification().then((res:any)=> {
      this.router.navigate(['/verify-email'])
    }, (err: any)=>{
      alert("Something Went Wrong");
    })
  }


  }





