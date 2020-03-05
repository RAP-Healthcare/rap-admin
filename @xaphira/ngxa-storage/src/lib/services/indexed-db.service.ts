import { Injector } from '@angular/core';
import { IDBPDatabase, StoreValue, StoreKey } from 'idb';
import * as idb from 'idb';
import { EncryptionService } from '@xaphira/utils';
import { OAUTH_INFO, SecurityResourceModel } from '@xaphira/shared';
import { Observable, Subject } from 'rxjs';

export class IndexedDBService<T> {
  protected $dbPromise: Promise<IDBPDatabase<T>>;
  protected enc: EncryptionService;
  protected oauthResource: SecurityResourceModel;

  constructor(injector: Injector, dbname: string, version: number, private storeName: any) {
    this.openSessionIDB(dbname, version);
    this.enc = injector.get(EncryptionService);
    this.oauthResource = injector.get(OAUTH_INFO);
  }

  public async openSessionIDB(dbname: string, version: number): Promise<IDBPDatabase<T>> {
    return this.$dbPromise = idb.openDB<T>(dbname, version);
  }

  public getOf(key): Observable<any> {
    const result$: Subject<any> = new Subject<any>();
    this.getKeyval(key, this.storeName).then((value: any) => {
      result$.next(value);
    });
    return result$.asObservable();
  }
  public putOf(key, val): Observable<any> {
    const result$: Subject<any> = new Subject<any>();
    this.putKeyval(key, val, this.storeName).then((value: any) => {
      result$.next(value);
    });
    return result$.asObservable();
  }
  public removeOf(key): Observable<void> {
    const result$: Subject<any> = new Subject<any>();
    this.removeKeyval(key, this.storeName).then((value: any) => {
      result$.next(value);
    });
    return result$.asObservable();
  }

  public get(key): Promise<StoreValue<T, any>> {
    return this.getKeyval(this.storeName, key);
  }
  public put(key, val): Promise<StoreKey<T, any>> {
    return this.putKeyval(this.storeName, key, val);
  }
  public remove(key): Promise<void> {
    return this.removeKeyval(this.storeName, key);
  }
  public clearAll(): Promise<void> {
    return this.clearAllKeyval(this.storeName);
  }
  public keys(): Promise<StoreKey<T, any>[]> {
    return this.keysKeyval(this.storeName);
  }

  public async getKeyval(storeName: any, key): Promise<StoreValue<T, any>> {
    return (await this.$dbPromise).get(storeName, key);
  }
  public async putKeyval(storeName: any, key, val): Promise<StoreKey<T, any>> {
    return (await this.$dbPromise).put(storeName, val, key);
  }
  public async removeKeyval(storeName: any, key): Promise<void> {
    return (await this.$dbPromise).delete(storeName, key);
  }
  public async clearAllKeyval(storeName: any): Promise<void> {
    return (await this.$dbPromise).clear(storeName);
  }
  public async keysKeyval(storeName: any): Promise<StoreKey<T, any>[]> {
    return (await this.$dbPromise).getAllKeys(storeName);
  }

  public async addArticle(storeName: any, value: any): Promise<StoreKey<T, any>> {
      return (await this.$dbPromise).add(storeName, value);
  }
  public async addAllArticle(storeName: any, values: any[]): Promise<void> {
      const tx = (await this.$dbPromise).transaction(storeName, 'readwrite');
      values.forEach((value: any) => {
          tx.store.add(value);
      });
      return await tx.done;
  }
}
