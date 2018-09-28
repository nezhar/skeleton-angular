import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { InputRadioComponent } from './input-radio.component';
import { InputErrorComponent } from '../input-error/input-error.component';


describe('InputRadioComponent', () => {
    let component: InputRadioComponent;
    let fixture: ComponentFixture<InputRadioComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [
                InputRadioComponent,
                InputErrorComponent,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputRadioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
