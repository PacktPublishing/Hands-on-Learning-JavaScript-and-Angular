import { Destination } from './destination';

export class Country {
    // unique id for each country
    id: number;

    // name of the country
    name: string;

    // list of destinations in the country.
    destinations: Destination[];
}