import { ModuleWithProviders, NgModule } from '@angular/core';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [ /* declare in `forRoot()` */ ],
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }

}
