import { InjectionToken } from '@angular/core';
import { IndexedDBFactoryService } from '../services/indexeddb-factory.service';
import { IndexedDBEncFactoryService } from '../services/indexeddb-enc-factory.service';

export const AUTH_INDEXED_DB: InjectionToken<IndexedDBEncFactoryService> =
new InjectionToken<IndexedDBEncFactoryService>('Auth IndexedDB Resource');

export const PROFILE_INDEXED_DB: InjectionToken<IndexedDBFactoryService> =
new InjectionToken<IndexedDBFactoryService>('Profile IndexedDB Resource');

export const SETTINGS_INDEXED_DB: InjectionToken<IndexedDBFactoryService> =
new InjectionToken<IndexedDBFactoryService>('Settings IndexedDB Resource');
