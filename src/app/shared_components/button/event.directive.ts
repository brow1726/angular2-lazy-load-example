import {Directive, Input, HostListener} from '@angular/core'

@Directive({selector: '[event-listen]'})
export class EventTracker {
    constructor() {}
    @Input('event-listen') clickEvent : string;

    @HostListener('click') onClick() {
        console.log(this.clickEvent)
    }

}