import { Observable } from 'rxjs';
import { StoreValue, StoreKey, IDBPDatabase } from 'idb';

export interface IndexedDBFactoryService {
  openSessionIDB(dbname: string, version: number): Promise<IDBPDatabase<any>>;

  getOf(key): Observable<any>;
  putOf(key, val): Observable<any>;
  removeOf(key): Observable<void>;

  get(key): Promise<StoreValue<any, any>>;
  put(key, val): Promise<StoreKey<any, any>>;
  remove(key): Promise<void>;
  clearAll(): Promise<void>;
  keys(): Promise<StoreKey<any, any>[]>;

  getKeyval(storeName: any, key): Promise<StoreValue<any, any>>;
  putKeyval(storeName: any, key, val): Promise<StoreKey<any, any>>;
  removeKeyval(storeName: any, key): Promise<void>;
  clearAllKeyval(storeName: any): Promise<void>;
  keysKeyval(storeName: any): Promise<StoreKey<any, any>[]>;

  addArticle(storeName: any, value: any): Promise<StoreKey<any, any>>;
  addAllArticle(storeName: any, values: any[]): Promise<void>;
}
