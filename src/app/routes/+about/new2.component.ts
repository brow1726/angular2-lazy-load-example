import {Component} from '@angular/core';
@Component({
    selector: 'anchor2',
    template: `
        <button (click)="myModal.open()">Click Here</button>
        <modal #myModal>
            <modal-header>
                <h1>Modal header</h1>
            </modal-header>
            <modal-content>
                Hello Modal!
            </modal-content>
            <modal-footer>
                <button class="btn btn-primary" (click)="myModal.close()">close</button>
            </modal-footer>
        </modal>
        `
})

export class newComponent2 {};