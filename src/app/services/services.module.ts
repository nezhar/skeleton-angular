import {ModuleWithProviders, NgModule} from '@angular/core';

import {LanguageService} from "./language/language.service";
import {PostResource} from "./resource/post.resource";


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [ /* declare in `forRoot()` */ ],
})
export class ServicesModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ServicesModule,
            providers: [
                LanguageService,

                // Resources
                PostResource,
            ]
        };
    }

}