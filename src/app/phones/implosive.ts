import { Phone } from './phone';
import { Voicing } from './voicing';
import { PlaceOfArticulation } from './placeofarticulation';

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
}