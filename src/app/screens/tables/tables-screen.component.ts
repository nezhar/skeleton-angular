import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-tables-screen',
    template: require('./tables-screen.component.html'),
    styles: [
        require('./tables-screen.component.scss')
    ]
})
export class TablesScreenComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('Tables screen component initialised');
    }
}