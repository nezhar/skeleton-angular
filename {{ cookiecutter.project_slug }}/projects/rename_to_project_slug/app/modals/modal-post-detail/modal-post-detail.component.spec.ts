import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPostDetailComponent } from './modal-post-detail.component';
import { ComponentsModule } from '../../components/components.module';
import { ModalBaseComponent } from '../modal-base/modal-base.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { createTranslatePoHttpLoader } from '../../services/language/language.helper';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Post } from '../../services/resource/post.resource';

describe('ModalPostDetailComponent', () => {
    let component: ModalPostDetailComponent;
    let fixture: ComponentFixture<ModalPostDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                ComponentsModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: createTranslatePoHttpLoader,
                        deps: [
                            HttpClient,
                        ]
                    },
                }),
            ],
            declarations: [
                ModalBaseComponent,
                ModalPostDetailComponent
            ],
            providers: [
                NgbActiveModal,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalPostDetailComponent);
        component = fixture.componentInstance;
        component.post = new Post({
            'userId': 1,
            'id': 1,
            'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            'body': ' nnostrum rerum est autem sunt rem eveniet architecto'
        });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
