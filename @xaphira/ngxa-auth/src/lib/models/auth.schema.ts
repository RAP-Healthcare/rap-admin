import { DBSchema } from 'idb';

export interface AuthIDB extends DBSchema {
  '#xa-auth': {
    key: string;
    value: string;
  };
}
