import { DBSchema } from 'idb';

export interface SettingsIDB extends DBSchema {
  '#xa-settings': {
    key: string;
    value: any;
  };
}
