import { ControlValueAccessor } from '@angular/forms';


/**
 * This is used as a 'mixin' for base components to implement the Angular pattern for ngModel
 *
 *
 * Make sure to register the provider for NG_VALUE_ACCESSOR on each component that is extended and required ngModel
 *
 * ```ts
 * @Component({
 *   providers: [
 *       {
 *           provide: NG_VALUE_ACCESSOR,
 *           useExisting: forwardRef(() => InputComponent),
 *           multi: true,
 *       },
 *   ],
 * })
 * ```
 *
 * Also bind ngModel to `value` make sure to propagate change and touch events.
 *
 * ```html
 * <input
 *     ....
 *     [ngModel]="value"
 *     (ngModelChange)="triggerOnChange($event)"
 *     (blur)="triggerOnTouched()"/>
 * ```
 */
export class NgModelValueAccessor implements ControlValueAccessor {
    public value: any;
    protected changedCallbacks = [];
    protected touchedCallbacks = [];

    writeValue(val: any): void {
        this.value = val;
    }

    registerOnChange(fn: any): void {
        this.changedCallbacks.push(fn);
    }

    registerOnTouched(fn: any): void {
        this.touchedCallbacks.push(fn);
    }

    triggerOnChange(newValue: any): void {
        this.value = newValue;
        this.changedCallbacks.forEach(f => f(this.value));
    }

    triggerOnTouched(): void {
        this.touchedCallbacks.forEach(f => f());
    }
}
