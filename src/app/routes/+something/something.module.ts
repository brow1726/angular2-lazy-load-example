import {NgModule} from '@angular/core';
import {NewModule} from '../../shared_components/+new/new.module';

import {SomethingRoutingModule} from './something.routing';

import {SomethingComponent} from './something.component';

@NgModule({
    imports: [
        SomethingRoutingModule,
        NewModule
    ],
    exports: [],
    declarations: [SomethingComponent],
    providers: []
})

export class SomethingModule { }