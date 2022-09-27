import { Phone } from './phone';
import { MannerFromString, MannerOfArticulation } from './mannerofarticulation';
import { Voicing, VoicingFromString } from './voicing';
import { PlaceFromString, PlaceOfArticulation } from './placeofarticulation';

export class PulmonicConsonant extends Phone {

    constructor(symbol: string, voicing: Voicing, place: PlaceOfArticulation, manner: MannerOfArticulation, clickable: boolean, desc?: string) {
      super();

      this.symbol = symbol;
      this.voicing = voicing;
      this.place = place;
      this.manner = manner;
      this.desc = "";

      switch(voicing) {
        case Voicing.Voiceless: this.desc += "voiceless "; break;
        case Voicing.Voiced: this.desc += "voiced "; break;
        case Voicing.BreathyVoiced: this.desc += "breathy voiced "; break;
        default: this.desc += "(unknown voicing) ";
        if(this.symbol != '') console.log("voicing error for phone " + this.symbol);
      }

      switch(place) {
        case PlaceOfArticulation.Bilabial: this.desc += "bilabial "; break;
        case PlaceOfArticulation.Labiodental: this.desc += "labiodental "; break;
        case PlaceOfArticulation.Dental: this.desc += "dental "; break;
        case PlaceOfArticulation.Alveolar: this.desc += "alveolar "; break;
        case PlaceOfArticulation.Retroflex: this.desc += "retroflex "; break;
        case PlaceOfArticulation.Palatal: this.desc += "palatal "; break;
        case PlaceOfArticulation.PalatoAlveolar: this.desc += "palato-alveolar "; break;
        case PlaceOfArticulation.AlveoloPalatal: this.desc += "alveolo-palatal "; break;
        case PlaceOfArticulation.Velar: this.desc += "velar "; break;
        case PlaceOfArticulation.Uvular: this.desc += "uvular "; break;
        case PlaceOfArticulation.Pharyngeal: this.desc += "pharyngeal/epiglottal "; break;
        case PlaceOfArticulation.Glottal: this.desc += "glottal "; break;
        default: this.desc += "(unknown place of articulation) ";
        if(this.symbol != '') console.log("place of articulation error for phone " + this.symbol);
      }

      switch(manner) {
        case MannerOfArticulation.Stop: this.desc += "stop (plosive)"; break;
        case MannerOfArticulation.Nasal: this.desc += "nasal"; break;
        case MannerOfArticulation.Trill: this.desc += "trill"; break;
        case MannerOfArticulation.TapFlap: this.desc += "tap/flap"; break;
        case MannerOfArticulation.Fricative: this.desc += "fricative"; break;
        case MannerOfArticulation.LateralFricative: this.desc += "lateral fricative"; break;
        case MannerOfArticulation.Affricate: this.desc += "affricate"; break;
        case MannerOfArticulation.LateralAffricate: this.desc += "lateral affricate"; break;
        case MannerOfArticulation.Approximant: this.desc += "approximant"; break;
        case MannerOfArticulation.LateralApproximant: this.desc += "lateral approximant"; break;
        default: this.desc += "(unknown manner of articulation) ";
        if(this.symbol != '') console.log("manner of articulation error for phone " + this.symbol);
      }

      if(typeof(desc) !== 'undefined') {
        this.desc = desc;
      }

      this.clickable = clickable;
    }

    voicing: Voicing;
    place: PlaceOfArticulation;
    manner: MannerOfArticulation;

    static NullConsonant = new PulmonicConsonant("", -1, -1, -1, false);

    static fromObject(data: any): PulmonicConsonant {
      let symbol = data.symbol;
      let voicing = VoicingFromString[data.voicing];
      let place = PlaceFromString[data.place];
      let manner = MannerFromString[data.manner];
      let clickable = data.clickable;
      if(typeof(data.desc) === 'undefined') {
        return new PulmonicConsonant(symbol, voicing, place, manner, clickable);
      }
      else {
        let desc = data.desc;
        return new PulmonicConsonant(symbol, voicing, place, manner, clickable, desc);
      }
    }
}