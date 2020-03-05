import { InjectionToken } from '@angular/core';
import { HttpFactoryService } from '../services/http-factory.service';

export const HTTP_SERVICE: InjectionToken<HttpFactoryService> =
new InjectionToken<HttpFactoryService>('Http Service');
