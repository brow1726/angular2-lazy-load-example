import { Component } from '@angular/core';

@Component({
    selector: 'my-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['./footer.css']
})

export class FooterComponent {
    constructor() {
        console.log('FooterComponent =====> ');
    }

}