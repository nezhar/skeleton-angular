import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { InputSelectComponent } from './input-select.component';
import { InputErrorComponent } from '../input-error/input-error.component';

describe('InputSelectComponent', () => {
    let component: InputSelectComponent;
    let fixture: ComponentFixture<InputSelectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                NgSelectModule
            ],
            declarations: [
                InputSelectComponent,
                InputErrorComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
