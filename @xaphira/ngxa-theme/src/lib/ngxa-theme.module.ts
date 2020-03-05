import { ModuleWithProviders, NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PluralPipe } from './pipes/plural.pipe';
import { RoundPipe } from './pipes/round.pipe';
import { TimingPipe } from './pipes/timing.pipe';
import { NumberWithCommasPipe } from './pipes/number-with-commas.pipe';
import { OneColumnLayoutComponent } from './layouts/one-column/one-column.layout';
import { TwoColumnsLayoutComponent } from './layouts/two-columns/two-columns.layout';
import { ThreeColumnsLayoutComponent } from './layouts/three-columns/three-columns.layout';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';

import { ErrorHandlerService } from './services/error-handler.service';
import { CustomPreloadingStrategy } from './services/preloading-strategy.service';
import { AnalyticsService } from './services/analytics.service';
import { LayoutService } from './services/layout.service';
import { StateService } from './services/state.service';

export const PROVIDERS = [
  { provide: ErrorHandler, useClass: ErrorHandlerService},
  CustomPreloadingStrategy,
  AnalyticsService,
  LayoutService,
  StateService,
];

export const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
];
export const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
];
export const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

@NgModule({
  imports: [CommonModule, ...NB_MODULES],
  declarations: [...COMPONENTS, ...PIPES],
  exports: [CommonModule, ...COMPONENTS, ...PIPES],
})
export class NgxaThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgxaThemeModule,
      providers: [
        ...PROVIDERS,
        ...NbThemeModule.forRoot(
          {
            name: localStorage.getItem('theme') ?
                  (
                    localStorage.getItem('theme').match(new RegExp('^dark$|^default$', 'g')) ?
                        localStorage.getItem('theme') :
                        'default'
                  ) :
                  'default',
          },
          [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME ],
        ).providers,
      ],
    };
  }
}
