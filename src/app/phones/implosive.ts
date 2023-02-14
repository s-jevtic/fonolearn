import { Phone } from './phone';
import { Voicing } from './voicing';
import { PlaceFromString, PlaceOfArticulation, UnknownPlaceString } from './placeofarticulation';

export class Implosive extends Phone {
    constructor(symbol: string, place: PlaceOfArticulation, clickable: boolean, desc?: string) {
        super();
        this.symbol = symbol;
        this.place = place;
        this.voicing = Voicing.Voiced;
        this.desc = "";
        switch(this.place) {
            case PlaceOfArticulation.Bilabial: this.desc += $localize `bilabial` + " "; break;
            case PlaceOfArticulation.Dental: // not a mistake
            case PlaceOfArticulation.Alveolar: this.desc += $localize `dental/alveolar` + " "; break;
            case PlaceOfArticulation.Retroflex: this.desc += $localize `retroflex` + " "; break;
            case PlaceOfArticulation.Palatal: this.desc += $localize `palatal` + " "; break;
            case PlaceOfArticulation.Velar: this.desc += $localize `velar` + " "; break;
            case PlaceOfArticulation.Uvular: this.desc += $localize `uvular` + " "; break;
            default:
                this.desc += UnknownPlaceString + " ";
                console.log("place of articulation error for phone " + this.symbol);
        }
        this.desc += $localize `implosive`;
        this.clickable = clickable;
        if(typeof(desc) !== 'undefined') {
            this.desc = desc;
        }
    }
    place: PlaceOfArticulation;
    voicing: Voicing;

    static fromObject(data: any): Implosive {
        let symbol = data.symbol;
        let place = PlaceFromString[data.place];
        let clickable = data.clickable;
        let p;
        if (!data.desc) {
          p = new Implosive(symbol, place, clickable);
        }
        else {
          let desc = data.desc;
          p = new Implosive(symbol, place, clickable, desc);
        }
        if(data.alias) {
          p.alias = data.alias;
        }
        return p;
      }
}
