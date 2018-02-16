import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {NgbDatepickerModule, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";

import {NgbMomentpickerComponent} from "./ngb-momentpicker.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbDatepickerModule,
        NgbTimepickerModule,
    ],
    exports: [
        NgbMomentpickerComponent,
    ],
    declarations: [
        NgbMomentpickerComponent,
    ],
    providers: [],
})
export class NgbMomentpickerModule {

}