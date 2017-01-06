import {NgModule} from '@angular/core';

import {userProfileComponent} from './userPofile.component';
import {userProfileRouting} from './userProfile.routing';

@NgModule({
    imports: [userProfileRouting],
    exports: [],
    declarations: [userProfileComponent],
    providers: []
})

export class userProfileModule {}