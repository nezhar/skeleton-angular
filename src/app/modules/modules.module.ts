import { ModuleWithProviders, NgModule } from '@angular/core';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [ /* declare in `forRoot()` */ ],
})
export class ModulesModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ModulesModule,
            providers: []
        };
    }

}