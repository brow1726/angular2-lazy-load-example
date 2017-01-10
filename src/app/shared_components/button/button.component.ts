import {Component} from '@angular/core';

@Component({
    selector: 'button-1',
    template:`<button>{{buttonName}}</button>`
})

export class ButtonComponent {
    constructor() { }
    get buttonName(): string {return 'click me'};

    clicked() {
        console.log('something')
    };
}