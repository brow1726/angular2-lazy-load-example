import { Component, OnInit, OnDestroy } from '@angular/core';
import * as videojs from 'video.js'


@Component({
    selector: 'something',
    templateUrl: 'something.component.html'
})
export class SomethingComponent implements OnInit, OnDestroy {
    constructor() { }

    ngOnInit() {
        videojs('video-player', {
            controls: true,
            autoplay: true
        }, ()=> {});
    }

    ngOnDestroy() {
        videojs('video-player').dispose();
    }
}