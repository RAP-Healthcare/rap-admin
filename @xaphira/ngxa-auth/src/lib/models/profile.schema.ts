import { DBSchema } from 'idb';

export interface ProfileIDB extends DBSchema {
  '#xa-profile': {
    key: string;
    value: any;
  };
}
