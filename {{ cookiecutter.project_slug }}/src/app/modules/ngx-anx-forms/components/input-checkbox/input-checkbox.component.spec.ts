import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCheckboxComponent } from './input-checkbox.component';
import { InputErrorComponent } from '../input-error/input-error.component';
import { FormsModule } from '@angular/forms';
import { DefaultErrorMessageService, ErrorMessageService } from 'ngx-anx-forms/services/error-message.service';


describe('InputCheckboxComponent', () => {
    let component: InputCheckboxComponent;
    let fixture: ComponentFixture<InputCheckboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [
                InputCheckboxComponent,
                InputErrorComponent,
            ],
            providers: [
                {
                    provide: ErrorMessageService,
                    useClass: DefaultErrorMessageService
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputCheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
