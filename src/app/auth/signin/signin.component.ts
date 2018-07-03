import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm){
    let email = form.value.email;
    let password =  form.value.password;
    this.authservice.signinUser(email, password);
  }

}
