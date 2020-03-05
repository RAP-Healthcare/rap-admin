import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageMaskService } from './services/storage-mask.service';
import { STORAGE_SERVICE } from './providers/storage.provider';

export const STORAGE_PROVIDERS = [
  { provide: STORAGE_SERVICE, useClass: StorageMaskService},
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [],
  declarations: [],
})
export class NgxaStorageModule {

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgxaStorageModule,
      providers: [
        ...STORAGE_PROVIDERS,
      ],
    };
  }
}
