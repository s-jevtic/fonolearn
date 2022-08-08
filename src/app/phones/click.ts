import { Phone } from './phone';
import { Voicing } from './voicing';
import { PlaceOfArticulation } from './placeofarticulation';

export class Click extends Phone {
    constructor(symbol: string, place: PlaceOfArticulation, lateral: boolean, clickable: boolean, desc?: string) {
        super();
        this.symbol = symbol;
        this.place = place;
        this.voicing = Voicing.Voiced;
        this.lateral = lateral;
        this.desc = "";
        switch(this.place) {
            case PlaceOfArticulation.Bilabial: this.desc += "bilabial "; break;
            case PlaceOfArticulation.Dental: this.desc += "dental "; break;
            case PlaceOfArticulation.Alveolar: 
                if(this.lateral) {
                    this.desc += "lateral alveolar ";
                }
                else {
                    this.desc += "(post)alveolar ";
                }
                break;
            case PlaceOfArticulation.PalatoAlveolar: this.desc += "palato-alveolar "; break;
            default:
                this.desc += "(unknown place of articulation) ";
                console.log("place of articulation error for phone " + this.symbol);
        }
        this.desc += "click";
        this.clickable = clickable;
        if(typeof(desc) !== 'undefined') {
            this.desc = desc;
        }
    }
    place: PlaceOfArticulation;
    voicing: Voicing;
    lateral: boolean;
}