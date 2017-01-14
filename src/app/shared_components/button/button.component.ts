import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'button-comp',
    template:`<button (click)="clicked(this, $event)">click</button>`
})
export class ButtonComponent {
    @Output() emitEvent: EventEmitter<any> = new EventEmitter();
    constructor() {

    }

    clicked(comp: {}, event: {functions: {}}) {
        event.functions = comp;
        this.emitEvent.emit(event);
    };

    someOtherFunction() {
        console.log(this);
        alert('emitted whole object');
    }
}