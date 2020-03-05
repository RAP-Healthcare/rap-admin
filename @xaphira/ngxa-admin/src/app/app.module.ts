/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { CoreModule } from '@xaphira/core';
import { OAUTH_INFO, SharedModule, ENVIRONMENT, API } from '@xaphira/shared';
import { UtilsModule } from '@xaphira/utils';
import { NgxaStorageModule } from '@xaphira/ngxa-storage';
import { NgxaAuthModule } from '@xaphira/ngxa-auth';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { MockCoreModule } from '@xaphira/ngxa-mock';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { apiPath } from '../configs/api.config';
import { oauthResource } from '../configs/security.config';
import { IndexedDBDistributionService } from './services/indexeddb-dist.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgxaThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    NgIdleKeepaliveModule.forRoot(),
    CoreModule.forRoot(),
    SharedModule.forRoot(),
    UtilsModule.forRoot(),
    NgxaStorageModule.forRoot(),
    NgxaAuthModule.forRoot(),
    /**
     * Mock Service & Data To Be Delete
     **/
    MockCoreModule.forRoot(),
    ServiceWorkerModule.register('/ngxa-sw.js'),
    // ServiceWorkerModule.register('/ngxa-sw.js', {enabled: environment.production && location.protocol !== 'http:'}),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LOCALE_ID, useValue: environment.locale,
    },
    {
      provide: LocationStrategy, useClass: PathLocationStrategy,
    },
    {
      provide: APP_BASE_HREF, useValue: environment.basePath,
    },
    {
      provide: ENVIRONMENT, useValue: environment,
    },
    {
      provide: API, useValue: apiPath,
    },
    {
      provide: OAUTH_INFO, useValue: oauthResource,
    },
    IndexedDBDistributionService,
  ],
})
export class AppModule {}
