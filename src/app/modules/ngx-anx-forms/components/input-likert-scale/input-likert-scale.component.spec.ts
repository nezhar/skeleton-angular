import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLikertScaleComponent } from './input-likert-scale.component';
import { FormsModule } from '@angular/forms';
import { InputRadioComponent } from '../input-radio/input-radio.component';
import { InputErrorComponent } from '../input-error/input-error.component';

describe('InputLikertScaleComponent', () => {
    let component: InputLikertScaleComponent;
    let fixture: ComponentFixture<InputLikertScaleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [
                InputLikertScaleComponent,
                InputRadioComponent,
                InputErrorComponent,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputLikertScaleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
