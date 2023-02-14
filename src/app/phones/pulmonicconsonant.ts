import { Phone } from './phone';
import { MannerFromString, MannerOfArticulation, UnknownMannerString } from './mannerofarticulation';
import { UnknownVoicingString, Voicing, VoicingFromString } from './voicing';
import { PlaceFromString, PlaceOfArticulation, UnknownPlaceString } from './placeofarticulation';

export class PulmonicConsonant extends Phone {

    constructor(symbol: string, voicing: Voicing, place: PlaceOfArticulation, manner: MannerOfArticulation, clickable: boolean, desc?: string) {
      super();

      this.symbol = symbol;
      this.voicing = voicing;
      this.place = place;
      this.manner = manner;
      this.desc = "";

      switch(voicing) {
        case Voicing.Voiceless: this.desc += $localize `voiceless` + " "; break;
        case Voicing.Voiced: this.desc += $localize `voiced` + " "; break;
        case Voicing.BreathyVoiced: this.desc += $localize `breathy voiced` + " "; break;
        default: this.desc += UnknownVoicingString + " ";
        if(this.symbol != '') console.log("voicing error for phone " + this.symbol);
      }

      switch(place) {
        case PlaceOfArticulation.Bilabial: this.desc += $localize `bilabial` + " "; break;
        case PlaceOfArticulation.Labiodental: this.desc += $localize `labiodental` + " "; break;
        case PlaceOfArticulation.Dental: this.desc += $localize `dental` + " "; break;
        case PlaceOfArticulation.Alveolar: this.desc += $localize `alveolar` + " "; break;
        case PlaceOfArticulation.Retroflex: this.desc += $localize `retroflex` + " "; break;
        case PlaceOfArticulation.Palatal: this.desc += $localize `palatal` + " "; break;
        case PlaceOfArticulation.PalatoAlveolar: this.desc += $localize `palato-alveolar` + " "; break;
        case PlaceOfArticulation.AlveoloPalatal: this.desc += $localize `alveolo-palatal` + " "; break;
        case PlaceOfArticulation.Velar: this.desc += $localize `velar` + " "; break;
        case PlaceOfArticulation.Uvular: this.desc += $localize `uvular` + " "; break;
        case PlaceOfArticulation.Pharyngeal: this.desc += $localize `pharyngeal/epiglottal` + " "; break;
        case PlaceOfArticulation.Glottal: this.desc += $localize `glottal` + " "; break;
        default: this.desc += UnknownPlaceString + " ";
        if(this.symbol != '') console.log("place of articulation error for phone " + this.symbol);
      }

      switch(manner) {
        case MannerOfArticulation.Stop: this.desc += $localize `stop (plosive)`; break;
        case MannerOfArticulation.Nasal: this.desc += $localize `nasal`; break;
        case MannerOfArticulation.Trill: this.desc += $localize `trill`; break;
        case MannerOfArticulation.TapFlap: this.desc += $localize `tap/flap`; break;
        case MannerOfArticulation.Fricative: this.desc += $localize `fricative`; break;
        case MannerOfArticulation.LateralFricative: this.desc += $localize `lateral fricative`; break;
        case MannerOfArticulation.Affricate: this.desc += $localize `affricate`; break;
        case MannerOfArticulation.LateralAffricate: this.desc += $localize `lateral affricate`; break;
        case MannerOfArticulation.Approximant: this.desc += $localize `approximant`; break;
        case MannerOfArticulation.LateralApproximant: this.desc += $localize `lateral approximant`; break;
        default: this.desc += UnknownMannerString + " ";
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
      let p;
      if (!data.desc) {
        p = new PulmonicConsonant(symbol, voicing, place, manner, clickable);
      }
      else {
        let desc = data.desc;
        p = new PulmonicConsonant(symbol, voicing, place, manner, clickable, desc);
      }
      if (data.alias) {
        p.alias = data.alias;
      }
      return p;
    }
}
