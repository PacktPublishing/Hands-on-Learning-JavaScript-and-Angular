import { InjectionToken } from  '@angular/core';
import { GlobalConfig } from './global-config.interface';

export let APP_CONFIG = new InjectionToken<GlobalConfig>('app config');

export const APP_DI_CONFIG: GlobalConfig = {
    
    APP_TITLE: 'Vikas\'s awesome travel blog!'

};