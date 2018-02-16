import {ControlValueAccessor} from "@angular/forms";

import {NgbDate} from "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date";
import {NgbTime} from "@ng-bootstrap/ng-bootstrap/timepicker/ngb-time";

import * as moment from "moment";
import {Moment, MomentInput} from "moment";
import {NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";


export abstract class NgbMomentpickerAccessor implements ControlValueAccessor {
    private innerDate: NgbDate;
    private innerTime: NgbTime;

    private changedCallbacks = new Array<(value: Moment) => void>();
    private touchedCallbacks = new Array<() => void>();

    get dateValue(): NgbDate {
        return this.innerDate;
    }
    set dateValue(value: NgbDate) {
        this.innerDate = value;
        this.triggerOnChange();
        this.triggerOnTouched();
    }

    get timeValue(): NgbTime {
        return this.innerTime;
    }
    set timeValue(value: NgbTime) {
        this.innerTime = value;
        this.triggerOnChange();
        this.triggerOnTouched();
    }

    writeValue(value: MomentInput): void {
        this.innerDate = this.toNgbDate(value);
        this.innerTime = this.toNgbTime(value);
    }

    registerOnChange(fn: (value: Moment) => void): void {
        this.changedCallbacks.push(fn);
    }

    registerOnTouched(fn: () => void): void {
        this.touchedCallbacks.push(fn);
    }

    triggerOnChange(): void {
        let
            momentValue = this.toMoment(this.innerDate, this.innerTime);

        this.changedCallbacks.forEach(f => f(momentValue));
    }

    triggerOnTouched(): void {
        this.touchedCallbacks.forEach(f => f());
    }

    protected toNgbDate(value: MomentInput): NgbDate {
        let
            momentValue = value ? moment(value) : null;

        if (momentValue && momentValue.isValid()) {
            return new NgbDate(
                momentValue.get('year'),
                momentValue.get('month'),
                momentValue.get('date'),
            );
        }
        else {
            return null;
        }
    }

    protected toNgbTime(value: MomentInput): NgbTime {
        let
            momentValue = value ? moment(value) : null;

        if (momentValue && momentValue.isValid()) {
            return new NgbTime(
                momentValue.get('hour'),
                momentValue.get('minute'),
                momentValue.get('second'),
            );
        }
        else {
            return null;
        }
    }

    protected toMoment(date: NgbDateStruct, time: NgbTimeStruct): Moment {
        let
            now = moment();

        if (date && time) {
            return moment({
                year: date.year,
                month: date.month,
                day: date.day,
                hour: time.hour,
                minute: time.minute,
                second: time.second,
            });
        }
        else {
            return null;
        }
    }

}