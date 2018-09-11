import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from 'src/app/layouts/main/main.component';
import { UIRouterModule } from '@uirouter/angular';


describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MainComponent
            ],
            imports: [
                UIRouterModule.forRoot({useHash: true}),
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
