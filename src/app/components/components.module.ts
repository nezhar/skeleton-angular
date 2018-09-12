import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '@app/components/button/button.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        ButtonComponent,
    ],
    declarations: [
        ButtonComponent,
    ],
    providers: [ /* declare in `forRoot()` */ ],
})
export class ComponentsModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ComponentsModule,
            providers: []
        };
    }

}
