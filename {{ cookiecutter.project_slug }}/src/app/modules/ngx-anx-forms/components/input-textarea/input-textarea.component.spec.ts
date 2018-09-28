import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { InputTextareaComponent } from './input-textarea.component';
import { InputErrorComponent } from '../input-error/input-error.component';


describe('InputTextareaComponent', () => {
    let component: InputTextareaComponent;
    let fixture: ComponentFixture<InputTextareaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                InputTextareaComponent,
                InputErrorComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputTextareaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
