import {NgModule} from '@angular/core';

import {userProfileComponent} from './userPofile.component';
import {userProfileRouting} from './userProfile.routing';
import {ButtonModule} from '../../shared_components/button/button.module';
import {EventTracker} from '../../shared_components/button/event.directive';


@NgModule({
    imports: [userProfileRouting, ButtonModule],
    exports: [],
    declarations: [userProfileComponent, EventTracker],
    providers: []
})

export class userProfileModule {}