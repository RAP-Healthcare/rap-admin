import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  NbCheckboxModule,
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { AUTH_INDEXED_DB, PROFILE_INDEXED_DB, SETTINGS_INDEXED_DB, USER_INFO } from '@xaphira/shared';
import { AuthGuardService } from '../services/auth-guard.service';
import { UnauthorizeGuardService } from '../services/unauth-guard.service';
import { AuthTokenService } from '../services/auth-token.service';
import { AuthGuardChildService } from '../services/auth-guard-child.service';
import { LoginPageComponent } from './login/login-page.component';
import { LogoutComponent } from './logout/logout.component';
import { NgxaAuthRoutingModule } from './ngxa-auth-routing.module';
import { NgxaLayoutAuthModule } from '../layout/ngxa-layout-auth.module';
import { AuthSignatureService } from '../services/auth-signature.service';
import { HttpInterceptorTokenService } from '../services/http-interceptor-token.service';
import { HttpInterceptorSignatureService } from '../services/http-interceptor-signature.service';
import { HttpInterceptorLangService } from '../services/http-interceptor-lang.service';
import { HttpInterceptorErrorService } from '../services/http-interceptor-error.service';
import { AuthUserService } from '../services/auth-user.service';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
import { ProfileIndexedDBService } from '../storage/profile-indexeddb.service';
import { SettingsIndexedDBService } from '../storage/settings-indexeddb.service';
import { AuthLanguageService } from '../services/auth-lang.service';

const AUTH_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorTokenService, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorSignatureService, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorLangService, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorErrorService, multi: true},
  { provide: USER_INFO, useClass: AuthUserService },
  { provide: AUTH_INDEXED_DB, useClass: AuthIndexedDBService },
  { provide: PROFILE_INDEXED_DB, useClass: ProfileIndexedDBService },
  { provide: SETTINGS_INDEXED_DB, useClass: SettingsIndexedDBService },
  AuthGuardService,
  UnauthorizeGuardService,
  AuthTokenService,
  AuthGuardChildService,
  AuthSignatureService,
  AuthLanguageService,
];

const components = [
  LoginPageComponent,
  LogoutComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    NbCheckboxModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxaThemeModule,
    NgxaLayoutAuthModule,
    NgxaAuthRoutingModule,
  ],
  exports: [
    ...components,
  ],
})
export class NgxaAuthModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgxaAuthModule,
      providers: [
        ...AUTH_PROVIDERS,
      ],
    };
  }
}
