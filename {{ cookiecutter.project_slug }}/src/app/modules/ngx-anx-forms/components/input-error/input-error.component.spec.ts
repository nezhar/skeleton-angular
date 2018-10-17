import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorComponent } from './input-error.component';
import { DefaultErrorMessageService, ErrorMessageService } from 'ngx-anx-forms/services/error-message.service';

describe('InputErrorComponent', () => {
    let component: InputErrorComponent;
    let fixture: ComponentFixture<InputErrorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InputErrorComponent],
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
        fixture = TestBed.createComponent(InputErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
