/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from '@xaphira/ngxa-theme';
import { Pattern } from '@xaphira/utils';
import { SettingsIndexedDBService } from '@xaphira/ngxa-auth';
import { IndexedDBDistributionService } from './services/indexeddb-dist.service';

@Component({
  selector: 'xa-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private analytics: AnalyticsService,
    private translate: TranslateService,
    private indexedDBDistribution: IndexedDBDistributionService,
    private settingsIndexedDB: SettingsIndexedDBService,
    @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    let localeCode: string = this.locale;
    this.settingsIndexedDB.get('locale').then((loc: string) => {
        if (loc) {
          if (loc.match(new RegExp(Pattern.LOCALE, 'g'))) {
            localeCode = loc;
          } else {
            this.settingsIndexedDB.put('locale', localeCode).then();
          }
        } else {
          this.settingsIndexedDB.put('locale', localeCode).then();
        }
        this.translate.addLangs(['en-US', 'id-ID']);
        this.translate.setDefaultLang(localeCode);
        this.translate.use(localeCode);
        this.locale = this.translate.currentLang;
    });
  }
}
