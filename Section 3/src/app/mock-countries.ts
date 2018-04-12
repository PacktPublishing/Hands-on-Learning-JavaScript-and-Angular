import {Country} from './country';
import {NZ_DESTINATIONS, US_DESTINATIONS, IND_DESTINATIONS} from './mock-destinations';

export const COUNTRIES: Country[] = [
    {id: 1, name: 'New Zealand', destinations: NZ_DESTINATIONS},
    {id: 2, name: 'USA', destinations: US_DESTINATIONS},
    {id: 3, name: 'India', destinations: IND_DESTINATIONS},
];