import { Phone } from './phone';
import { Voicing } from './voicing';
import { PlaceFromString, PlaceOfArticulation } from './placeofarticulation';

export class Implosive extends Phone {
    constructor(symbol: string, place: PlaceOfArticulation, clickable: boolean, desc?: string) {
        super();
        this.symbol = symbol;
        this.place = place;
        this.voicing = Voicing.Voiced;
        this.desc = "";
        switch(this.place) {
            case PlaceOfArticulation.Bilabial: this.desc += "bilabial "; break;
            case PlaceOfArticulation.Dental: // not a mistake
            case PlaceOfArticulation.Alveolar: this.desc += "dental/alveolar "; break;
            case PlaceOfArticulation.Retroflex: this.desc += "retroflex "; break;
            case PlaceOfArticulation.Palatal: this.desc += "palatal "; break;
            case PlaceOfArticulation.Velar: this.desc += "velar "; break;
            case PlaceOfArticulation.Uvular: this.desc += "uvular "; break;
            default:
                this.desc += "(unknown place of articulation) ";
                console.log("place of articulation error for phone " + this.symbol);
        }
        this.desc += "implosive";
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
        if(typeof(data.desc) === 'undefined') {
          return new Implosive(symbol, place, clickable);
        }
        else {
          let desc = data.desc;
          return new Implosive(symbol, place, clickable, desc);
        }
      }
}