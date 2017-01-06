import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'user-profile',
    templateUrl: 'userProfile.html'
})

export class userProfileComponent implements OnInit {
    constructor() { }
    //look for deconstruct

    ngOnInit() {
        console.log('loaded user Profile page');
    }

    clickEvent() {
        alert('clicked profile button');
    }
}