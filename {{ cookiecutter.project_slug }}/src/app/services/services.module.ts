import { ModuleWithProviders, NgModule } from '@angular/core';

import { LanguageService } from './language/language.service';
import { PostResource } from 'src/app/services/resource/post.resource';
import { UserResource } from 'src/app/services/resource/user.resource';
import { AuthenticationResource } from 'src/app/services/resource/authentication.resource';
import { AuthenticationGuard } from '@app/shared/guards/auth/auth.guard';
import { AlertService } from '@app/services/alert/alert.service';


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

                // Resources
                PostResource,
                UserResource,
                AuthenticationResource,

                // Services
                AlertService,
                LanguageService,
                AuthenticationGuard,
            ]
        };
    }

}
