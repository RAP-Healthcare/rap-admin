import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxaToastrService } from './services/ngxa-toastr.service';

export const components = [
];

export const TOASTR_PROVIDERS = [
  NgxaToastrService,
];

@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class NgxaToastrModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgxaToastrModule,
      providers: [
        ...TOASTR_PROVIDERS,
      ],
    };
  }
}
