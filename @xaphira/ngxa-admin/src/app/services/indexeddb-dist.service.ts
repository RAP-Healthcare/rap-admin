import { Injectable } from '@angular/core';
import { IDBPDatabase, IDBPTransaction } from 'idb';
import * as idb from 'idb';

@Injectable()
export class IndexedDBDistributionService {

  constructor() {
    this.createIDBStore();
  }

  public async createIDBStore(): Promise<any> {
    await idb.openDB<any>('xa-core', 1, {
      async upgrade(db: IDBPDatabase<any>, oldVersion: number, newVersion: number, transaction: IDBPTransaction<any>) {
        db.createObjectStore('#xa-auth');
        db.createObjectStore('#xa-profile');
        db.createObjectStore('#xa-settings');
      },
    });
  }

}
