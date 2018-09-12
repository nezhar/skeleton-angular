import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';


@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: [
        './button.component.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges {
    @Input() type: 'submit'|'button' = 'button';
    @Input() role: 'default'|'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'|'link' = 'default';
    @Input() size: 'sm'|'md'|'lg' = 'md';
    @Input() outline: boolean = false;
    @Input() disabled: boolean = false;
    @Input() fluid: boolean = false;

    styleClasses: string[] = [];

    ngOnChanges() {
        this.updateStyleClasses();
    }

    /**
     * Set styles for button based on inputs
     */
    updateStyleClasses() {
        this.styleClasses = ['btn'];
        this.styleClasses.push('btn-' + this.size);

        if (this.outline) {
            this.styleClasses.push('btn-outline-' + this.role);
        } else {
            this.styleClasses.push('btn-' + this.role);
        }

        if (this.fluid) {
            this.styleClasses.push('btn-block');
        }

        if (this.disabled) {
            this.styleClasses.push('disabled');
        }
    }
}
