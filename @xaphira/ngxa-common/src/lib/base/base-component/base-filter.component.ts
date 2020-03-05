import { Injector } from '@angular/core';
import { BaseFormComponent } from './base-form.component';

export abstract class BaseFilterComponent<T> extends BaseFormComponent<T> {

    constructor(
        public injector: Injector,
        controlsConfig?: {
            [key: string]: any;
        }) {
        super(injector, controlsConfig);
    }

}
