import { NgModule } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
// import { far  } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

// icons to be used in components
library.add(
    faLock,
    faUser
);

/**
 * This module is only used so the icon definition above can be loaded in the main module
 */
@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [],
})
export class IconsModule {
}
