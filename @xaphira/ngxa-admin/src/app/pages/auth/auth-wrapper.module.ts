import { NgModule } from '@angular/core';
import { NgxaAuthModule } from '@xaphira/ngxa-auth';

@NgModule({
  imports: [ NgxaAuthModule.forRoot() ],
})
export class AuthWrapperModule {}
