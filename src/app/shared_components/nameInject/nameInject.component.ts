import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[buttonName]'
})

export class injectName {
    constructor() {
    }
    @Input() buttonName: string;
}