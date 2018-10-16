import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsModule } from '@ngxs/store';
import { UIRouterModule } from '@uirouter/angular';
import { TranslateModule } from '@ngx-translate/core';
import { NgxAnxLoadingScreenModule } from 'ngx-anx-loading-screen/ngx-anx-loading-screen.module';

import { MainComponent } from '@app/layouts/main/main.component';
import { LanguageService } from '@app/services/language/language.service';


describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                NgxsModule.forRoot(),
                NgxAnxLoadingScreenModule.forRoot(),
                UIRouterModule.forRoot({useHash: true}),
            ],
            providers: [
                LanguageService,
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
