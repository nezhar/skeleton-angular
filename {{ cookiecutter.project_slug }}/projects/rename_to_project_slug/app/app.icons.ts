/* tslint:disable:no-commented-code */
import { NgModule } from '@angular/core';

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
    fas,
} from '@fortawesome/free-solid-svg-icons';
import { faSuperpowers, faAngular } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { far } from '@fortawesome/free-regular-svg-icons';

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
    constructor(library: FaIconLibrary) {
        // icons to be used in components
        library.addIconPacks(fas);
        library.addIcons(
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
            faAngular,
        );
    }
}
