import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_SERVICE } from './providers/http.provider';
import { HttpCommonService } from './services/http-common.service';

export const SHARED_PROVIDERS = [
  { provide: HTTP_SERVICE, useClass: HttpCommonService},
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [],
  declarations: [],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [
        ...SHARED_PROVIDERS,
      ],
    };
  }
}
