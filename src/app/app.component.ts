import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  page = "recipe";
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB6xkLQwyzwv4DO9V6soFly0bHbojtwJHw",
      authDomain: "ng-recipe-book-123.firebaseapp.com"
    })
   }
}
