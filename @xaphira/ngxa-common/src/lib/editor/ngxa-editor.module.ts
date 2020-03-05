import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';
import { CaldeiraKnabbenEditorComponent } from './ckeditor/ckeditor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { MCECoreComponent } from './tiny-mce/mce-core.component';
import { NgxaTextareaComponent } from './textarea/textarea.component';
import { NbInputModule } from '@nebular/theme';

export const components = [
  MCECoreComponent,
  TinyMCEComponent,
  CaldeiraKnabbenEditorComponent,
  NgxaTextareaComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    TranslateModule,
    NbInputModule,
    NgxaBaseModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class NgxaEditorModule { }
