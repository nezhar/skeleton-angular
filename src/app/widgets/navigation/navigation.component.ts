import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-navigation',
    template: require('./navigation.component.html'),
    styles: [
        require('./navigation.component.scss')
    ]
})
export class NavigationComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('Navigation component initialised');
    }
}