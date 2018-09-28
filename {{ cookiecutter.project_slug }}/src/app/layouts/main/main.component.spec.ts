import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from 'src/app/layouts/main/main.component';
import { UIRouterModule } from '@uirouter/angular';
import { NgxAnxLoadingScreenModule } from 'ngx-anx-loading-screen/ngx-anx-loading-screen.module';


describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NgxAnxLoadingScreenModule.forRoot(),
                UIRouterModule.forRoot({useHash: true}),
            ],
            declarations: [
                MainComponent,
            ],
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
