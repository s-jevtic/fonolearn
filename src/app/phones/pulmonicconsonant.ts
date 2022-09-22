import { Phone } from './phone';
import { mannerFromString, MannerOfArticulation } from './mannerofarticulation';
import { Voicing, voicingFromString } from './voicing';
import { placeFromString, PlaceOfArticulation } from './placeofarticulation';

export interface IPulmonicConsonant {
  symbol: string;
  voicing: string;
  place: string;
  manner: string;
  clickable: boolean;
  desc?: string;
}

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
          default: this.desc += "(unknown voicing) "; console.log("voicing error");
        }
        switch(place) {
          case PlaceOfArticulation.Bilabial: this.desc += "bilabial "; break;
          case PlaceOfArticulation.Alveolar: this.desc += "alveolar "; break;
          case PlaceOfArticulation.Palatal: this.desc += "palatal "; break;
          case PlaceOfArticulation.PalatoAlveolar: this.desc += "palato-alveolar "; break;
          case PlaceOfArticulation.AlveoloPalatal: this.desc += "alveolo-palatal "; break;
          case PlaceOfArticulation.Velar: this.desc += "velar "; break;
          case PlaceOfArticulation.Uvular: this.desc += "uvular "; break;
          case PlaceOfArticulation.Pharyngeal: this.desc += "pharyngeal/epiglottal "; break;
          case PlaceOfArticulation.Glottal: this.desc += "glottal "; break;
          default: this.desc += "(unknown place of articulation) "; console.log("place of articulation error")
        }
        switch(manner) {
          case MannerOfArticulation.Stop: this.desc += "stop (plosive)"; break;
          case MannerOfArticulation.Nasal: this.desc += "nasal"; break;
          case MannerOfArticulation.Trill: this.desc += "trill"; break;
          case MannerOfArticulation.TapFlap: this.desc += "tap/flap"; break;
          case MannerOfArticulation.Fricative: this.desc += "fricative"; break;
          case MannerOfArticulation.LateralFricative: this.desc += "lateral fricative"; break;
          case MannerOfArticulation.Affricate: this.desc += "affricate"; break;
          case MannerOfArticulation.Approximant: this.desc += "approximant"; break;
          case MannerOfArticulation.LateralApproximant: this.desc += "lateral approximant"; break;
          default: this.desc += "(unknown manner of articulation) "; console.log("manner of articulation error");
        }
        if(typeof(desc) !== 'undefined') {
          this.desc = desc;
        }
        this.clickable = clickable;
    }
    voicing: Voicing;
    place: PlaceOfArticulation;
    manner: MannerOfArticulation;
    static NullConsonant = new PulmonicConsonant("", -1, -1, -1, false)
    static fromObject(data: IPulmonicConsonant): PulmonicConsonant {
      let symbol = data.symbol;
      let voicing = voicingFromString(data.voicing);
      let place = placeFromString(data.place);
      let manner = mannerFromString(data.manner);
      let clickable = data.clickable;
      if(typeof(data.desc) === 'undefined') {
        return new PulmonicConsonant(symbol, voicing, place, manner, clickable);
      }
      else {
        return new PulmonicConsonant(symbol, voicing, place, manner, clickable);
      }
      /*
      EXAMPLE:
                  "symbol": "h",
            "voicing": "voiceless",
            "place": "glottal",
            "manner": "approximant",
            "clickable": true,
            "desc": "voiceless glottal approximant/fricative"
      */
    }
}