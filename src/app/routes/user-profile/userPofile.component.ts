import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from "../../shared_components/button/button.component";

@Component({
    selector: 'user-profile',
    templateUrl: 'userProfile.html'
})

export class userProfileComponent implements OnInit {
    private Something = new ButtonComponent();
    constructor() { }

    ngOnInit() {
        console.log('loaded user Profile page');
    }

    profileClick1() {
        alert('clicked on profile button 1');
        this.Something.clicked();
    }

    profileClick2() {
        alert('clicked on profile button 2')

    }

    profileClick3() {
        alert('clicked on profile button 3')
    }
}