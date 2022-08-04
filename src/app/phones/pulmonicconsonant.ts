import { MannerOfArticulation } from './mannerofarticulation';
import { Voicing } from './voicing';
import { PlaceOfArticulation } from './placeofarticulation';

export class PulmonicConsonant {

    constructor(symbol: string, voicing: Voicing, place: PlaceOfArticulation, manner: MannerOfArticulation) {
        this.symbol = symbol;
        this.voicing = voicing;
        this.place = place;
        this.manner = manner;
        this.desc = "";
        switch(voicing) {
          case Voicing.Voiceless: this.desc += "voiceless "; break;
          case Voicing.Voiced: this.desc += "voiced "; break;
          default: this.desc += "(unknown voicing) "; console.log("voicing error");
        }
        switch(place) {
          case PlaceOfArticulation.Bilabial: this.desc += "bilabial "; break;
          case PlaceOfArticulation.Alveolar: this.desc += "alveolar "; break;
          case PlaceOfArticulation.Velar: this.desc += "velar "; break;
          default: this.desc += "(unknown place of articulation) "; console.log("place of articulation error")
        }
        switch(manner) {
          case MannerOfArticulation.Stop: this.desc += "stop (plosive)"; break;
          default: this.desc += "(unknown manner of articulation) "; console.log("manner of articulation error");
        }
    }
    symbol: string;
    voicing: Voicing;
    place: PlaceOfArticulation;
    manner: MannerOfArticulation;
    desc: string;

}