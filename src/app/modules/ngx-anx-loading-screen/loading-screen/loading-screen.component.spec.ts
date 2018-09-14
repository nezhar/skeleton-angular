import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingScreenComponent } from './loading-screen.component';
import { LoadingScreenService } from '../loading-screen.service';


describe('LoadingScreenComponent', () => {
    let component: LoadingScreenComponent;
    let fixture: ComponentFixture<LoadingScreenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LoadingScreenComponent
            ],
            providers: [
                LoadingScreenService,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoadingScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
