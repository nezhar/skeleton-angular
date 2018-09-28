import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { IconInputComponent } from './icon-input.component';
import { InputComponent } from '../input/input.component';
import { InputErrorComponent } from '../input-error/input-error.component';


describe('IconInputComponent', () => {
    let component: IconInputComponent;
    let fixture: ComponentFixture<IconInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [
                IconInputComponent,
                InputComponent,
                InputErrorComponent,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
