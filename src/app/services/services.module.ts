import { ModuleWithProviders, NgModule } from '@angular/core';

import { LanguageService } from "./language/language.service";
import { PostResource, UserResource, AuthenticationResource } from './resource';


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
                UserResource,
                AuthenticationResource
            ]
        };
    }

}