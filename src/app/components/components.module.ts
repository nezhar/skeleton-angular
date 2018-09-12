import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { IconInputComponent } from './icon-input/icon-input.component';
import { ButtonComponent } from '@app/components/button/button.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        InputComponent,
        IconInputComponent,
        ButtonComponent,
    ],
    declarations: [
        InputComponent,
        IconInputComponent,
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
