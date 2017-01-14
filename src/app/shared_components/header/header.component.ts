import { Component } from '@angular/core';

@Component({
    selector: 'my-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.css']
})

export class HeaderComponent {
    constructor() {
        console.log('HeaderComponent =====> ');
    }

}