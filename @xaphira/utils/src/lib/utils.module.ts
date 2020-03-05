import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EncryptionService } from './services/encryption.service';
import { TranslationService } from './services/translation.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslationService(http, './assets/i18n/', '.json');
}

export const UTILS_PROVIDERS = [
  EncryptionService,
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [ TranslateModule ],
  declarations: [],
})
export class UtilsModule {

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: UtilsModule,
      providers: [
        ...UTILS_PROVIDERS,
        ...TranslateModule.forRoot({
              loader: {
                  provide: TranslateLoader,
                  useFactory: (createTranslateLoader),
                  deps: [HttpClient],
              },
            }).providers,
      ],
    };
  }
}
