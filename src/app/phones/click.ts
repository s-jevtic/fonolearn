import { Phone } from './phone';
import { PlaceFromString, PlaceOfArticulation, UnknownPlaceString } from './placeofarticulation';

export class Click extends Phone {
    constructor(symbol: string, place: PlaceOfArticulation, lateral: boolean, clickable: boolean, desc?: string) {
        super();
        this.symbol = symbol;
        this.place = place;
        this.lateral = lateral;
        this.desc = "";
        switch(this.place) {
            case PlaceOfArticulation.Bilabial: this.desc += $localize `bilabial` + " "; break;
            case PlaceOfArticulation.Dental: this.desc += $localize `dental` + " "; break;
            case PlaceOfArticulation.Alveolar: 
                if(this.lateral) {
                    this.desc += $localize `lateral alveolar` + " ";
                }
                else {
                    this.desc += $localize `(post)alveolar` + " ";
                }
                break;
            case PlaceOfArticulation.PalatoAlveolar: this.desc += $localize `palato-alveolar` + " "; break;
            default:
                this.desc += UnknownPlaceString + " ";
                console.log("place of articulation error for phone " + this.symbol);
        }
        this.desc += "click";
        this.clickable = clickable;
        if(typeof(desc) !== 'undefined') {
            this.desc = desc;
        }
    }
    place: PlaceOfArticulation;
    lateral: boolean;
    
    static fromObject(data: any): Click {
        let symbol = data.symbol;
        let place = PlaceFromString[data.place];
        let lateral = data.lateral;
        let clickable = data.clickable;
        let p;
        if (!data.desc) {
            p = new Click(symbol, place, lateral, clickable);
        }
        else {
            let desc = data.desc;
            p = new Click(symbol, place, lateral, clickable, desc);
        }
        if (data.alias) {
            p.alias = data.alias;
        }
        return p;
    }
}
