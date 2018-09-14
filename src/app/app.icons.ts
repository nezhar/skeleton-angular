import { NgModule } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faLock,
    faUser,
    faHome,
    faWindowMaximize,
    faTable,
    faUsers,
    faBars,
    faLanguage,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faSuperpowers } from '@fortawesome/free-brands-svg-icons';
// import { far  } from '@fortawesome/free-regular-svg-icons';

// icons to be used in components
library.add(
    faLock,
    faUser,
    faHome,
    faWindowMaximize,
    faTable,
    faUsers,
    faBars,
    faLanguage,
    faSuperpowers,
    faSpinner,
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
