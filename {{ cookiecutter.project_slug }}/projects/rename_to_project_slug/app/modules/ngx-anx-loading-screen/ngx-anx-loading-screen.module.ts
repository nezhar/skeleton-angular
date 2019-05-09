import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { LoadingScreenService } from './loading-screen.service';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        LoadingScreenComponent,
    ],
    declarations: [
        LoadingScreenComponent,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers: [/* declare in `forRoot()` */],
})
export class NgxAnxLoadingScreenModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxAnxLoadingScreenModule,
            providers: [
                LoadingScreenService,
            ]
        };
    }
}
