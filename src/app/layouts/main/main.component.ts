import {Component, OnInit} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';


@Component({
    selector: 'app-main',
    template: require('./main.component.html'),
    styles: [
        require('./main.component.scss')
    ]
})
export class MainComponent implements OnInit {
    ngOnInit() {
        console.log('Main component initialised');
    }

    addNumbers(a: number, b: number): number {
        return a + b;
    }
}