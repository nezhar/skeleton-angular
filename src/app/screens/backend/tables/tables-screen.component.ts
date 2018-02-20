import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-tables-screen',
    templateUrl: './tables-screen.component.html',
    styleUrls: [
        './tables-screen.component.scss'
    ]
})
export class TablesScreenComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('Tables screen component initialised');
    }
}