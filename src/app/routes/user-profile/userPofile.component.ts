import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'user-profile',
    templateUrl: 'userProfile.html'
})

export class userProfileComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('loaded user Profile page');
    }

    profileClick1(event: {srcElement : any}) {

    }

    profileClick2(x) {
        console.log(x);
        console.log(this);

    }

    profileClick3(event : {functions : {someOtherFunction: ()=> void}}) {
        console.log(event);
        console.log(event.functions);
        event.functions.someOtherFunction();
    }
}