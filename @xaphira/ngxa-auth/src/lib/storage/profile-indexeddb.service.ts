import { Injectable, Injector } from '@angular/core';
import { IndexedDBService } from '@xaphira/ngxa-storage';
import { oauthInfoModels, IndexedDBFactoryService, TypeDataOauth } from '@xaphira/shared';
import { ProfileIDB } from '../models/profile.schema';

@Injectable({providedIn : 'root'})
export class ProfileIndexedDBService extends IndexedDBService<ProfileIDB> implements IndexedDBFactoryService {

  constructor(injector: Injector) {
    super(injector, 'xa-core', 1, '#xa-profile');
  }

  public loginStorage(response: any): void {
    oauthInfoModels.forEach(data => {
        if (response[data.key]) {
          if (data.type === TypeDataOauth.PROFILE) {
            this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
          }
        }
    });
  }

  public logout(): void {
    oauthInfoModels.forEach(data => {
      if (data.type === TypeDataOauth.PROFILE) {
        this.remove(data.key);
      }
    });
  }

}
