import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{

    constructor(private dataStorageService:DataStorageService, public authService:AuthService){}

    onStoreRecipe(){
        this.dataStorageService.storeRecipe()
            .subscribe(
                (response) => {
                    console.log("Saved");
                },
            );
    }

    onFetchRecipe(){
        this.dataStorageService.fetchRecipe();
    }

    onSignout(){
        this.authService.signoutUser();
    }
}