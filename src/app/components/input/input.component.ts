import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ],
})
export class InputComponent implements ControlValueAccessor {
    @Input() name: string = 'text';
    @Input() title: string = '';
    @Input() type: string = 'text';
    @Input() placeholder: string = '';
    @Input() errors: Array<string> = [];

    public value;
    protected changedCallbacks = new Array<(value: string) => void>();
    protected touchedCallbacks = new Array<() => void>();

    writeValue(val: string): void {
        this.value = val;
    }

    registerOnChange(fn: any): void {
        this.changedCallbacks.push(fn);
    }

    registerOnTouched(fn: any): void {
        this.changedCallbacks.push(fn);
    }

    triggerOnChange(newValue: string): void {
        this.value = newValue;
        this.changedCallbacks.forEach(f => f(this.value));
    }

    triggerOnTouched(): void {
        this.touchedCallbacks.forEach(f => f());
    }
}
