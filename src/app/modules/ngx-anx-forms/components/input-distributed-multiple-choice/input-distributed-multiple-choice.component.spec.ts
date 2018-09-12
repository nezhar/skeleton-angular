import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgSelectModule } from '@ng-select/ng-select';

import { InputDistributedMultipleChoiceComponent } from './input-distributed-multiple-choice.component';
import { InputSelectComponent } from '../input-select/input-select.component';
import { InputErrorComponent } from '../input-error/input-error.component';

describe('InputDistributedMultipleChoiceComponent', () => {
    let component: InputDistributedMultipleChoiceComponent;
    let fixture: ComponentFixture<InputDistributedMultipleChoiceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NgSelectModule,
            ],
            declarations: [
                InputDistributedMultipleChoiceComponent,
                InputSelectComponent,
                InputErrorComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputDistributedMultipleChoiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
