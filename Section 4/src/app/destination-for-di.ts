import {Destination} from './destination';

export class DestinationWithoutDI {

    public destinationGeoInfo : DestinationGeoInfo;
    public destinationPolInfo: DestinationPolInfo;
    public name: "Westeros";

    constructor() {
        this.destinationGeoInfo = new DestinationGeoInfo();
        this.destinationPolInfo = new DestinationPolInfo();
    }

    countryDescription() {
        return '${this.name} => Geograhical Info: ${this.destinationGeoInfo} '+
        ' , Political Info: ${this.destinationPolInfo}';
    }
  
}

export class DestinationWithDI {
    
    public name: "Westeros";

    constructor(private destinationGeoInfo: DestinationGeoInfo, private destinationPolInfo:DestinationPolInfo) {
    }

    countryDescription() {
        return '${this.name} => Geograhical Info: ${this.destinationGeoInfo} '+
        ' , Political Info: ${this.destinationPolInfo}';
    }
    
}



class DestinationGeoInfo {
    
}


class DestinationPolInfo {

}