import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    token = '';
    login : boolean = false;

    constructor(private router: Router){}

    signupUser(email:string, password:string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                (result) => {
                    console.log(result)
                }
            )
            .catch(
                error => {
                    console.log(error); 
                }
            )
    }

    signinUser(email, password){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    console.log(response);
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token:string) => {
                                this.token = token;
                                this.login = true
                            }
                        )
                }
            )
            .catch(
                error => console.log("Hello "+error)
            )
    }

    signoutUser(){
        firebase.auth().signOut()
            .then(
                response => {
                    this.token = null;
                    this.login = false;
                    console.log('signout ');
                }
            )
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
            .then(
                (token:string) => {
                    this.token = token;
                }
            )
        return this.token;    
    }

}