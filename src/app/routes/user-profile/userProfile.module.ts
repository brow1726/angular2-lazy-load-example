import {NgModule} from '@angular/core';

import {userProfileComponent} from './userPofile.component';
import {userProfileRouting} from './userProfile.routing';
import {ButtonModule} from '../../shared_components/button/button.module';
import {injectName} from '../../shared_components/nameInject/nameInject.component'


@NgModule({
    imports: [userProfileRouting, ButtonModule],
    exports: [],
    declarations: [userProfileComponent, injectName],
    providers: []
})

export class userProfileModule {}