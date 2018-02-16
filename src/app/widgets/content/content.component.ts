import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-content',
    template: require('./content.component.html'),
    styles: [
        require('./content.component.scss')
    ]
})
export class ContentComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('Content component initialised');
    }
}