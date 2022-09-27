import { Phone } from './phone';
import { Voicing } from './voicing';
import { PlaceFromString, PlaceOfArticulation } from './placeofarticulation';
import { MannerFromString, MannerOfArticulation } from './mannerofarticulation';

export class Ejective extends Phone {
    constructor(symbol: string, place: PlaceOfArticulation, manner: MannerOfArticulation, clickable: boolean, desc?: string) {
        super();
        this.symbol = symbol;
        this.place = place;
        this.manner = manner;
        this.voicing = Voicing.Voiceless;
        this.desc = "";
        switch(this.place) {
            case PlaceOfArticulation.Bilabial: this.desc += "bilabial "; break;
            case PlaceOfArticulation.Alveolar: this.desc += "dental/alveolar "; break;
            case PlaceOfArticulation.Retroflex: this.desc += "retroflex "; break;
            case PlaceOfArticulation.Velar: this.desc += "velar "; break;
            default:
                this.desc += "(unknown place of articulation) ";
                console.log("place of articulation error for phone " + this.symbol);
        }
        this.desc += "ejective";
        switch(this.manner) {
            case MannerOfArticulation.Stop: break;
            case MannerOfArticulation.Fricative: this.desc += " fricative"; break;
            default:
                this.desc += "(unknown manner of articulation) ";
                console.log("manner of articulation error for phone " + this.symbol);
        }
        this.clickable = clickable;
        if(typeof(desc) !== 'undefined') {
            this.desc = desc;
        }
    }
    place: PlaceOfArticulation;
    manner: MannerOfArticulation;
    voicing: Voicing;

    static fromObject(data: any): Ejective {
        let symbol = data.symbol;
        let place = PlaceFromString[data.place];
        let manner = MannerFromString[data.manner];
        let clickable = data.clickable;
        if(typeof(data.desc) === 'undefined') {
            return new Ejective(symbol, place, manner, clickable);
        }
        else {
            let desc = data.desc;
            return new Ejective(symbol, place, manner, clickable, desc);
        }
    }
}