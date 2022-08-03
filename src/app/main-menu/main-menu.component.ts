import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router) { }

  tablesymbols: string[][] = [];

  static symbols = [
    "p",
    "t",
    "k",
    "b",
    "d",
    "g",
    "a",
    "ɛ",
    "e",
    "i",
    "ɔ",
    "o",
    "u"
  ];

  readonly rowsize = 6;

  p: PulmonicConsonant;
  t: PulmonicConsonant;
  k: PulmonicConsonant;
  b: PulmonicConsonant;
  d: PulmonicConsonant;
  g: PulmonicConsonant;

  ngOnInit(): void {
    this.p = new PulmonicConsonant("p", Voicing.Voiceless, PlaceOfArticulation.Bilabial, MannerOfArticulation.Stop);
    // let temp: string[] = [];
    
    // for (let i = 0; i < MainMenuComponent.symbols.length; i++) {

    //   //console.log(MainMenuComponent.symbols[i]);
    //   temp.push(MainMenuComponent.symbols[i]);
    //   if ( (i + 1) % this.rowsize == 0 || i + 1 == MainMenuComponent.symbols.length ) {
    //     this.tablesymbols.push(temp);
    //     temp = [];
    //   }

    // }

  }

  ipaClick(event: MouseEvent, arg: string): void {
      if ((event.target as HTMLButtonElement).classList.contains("btn-primary")) {
        (event.target as HTMLButtonElement).classList.remove("btn-primary");
        (event.target as HTMLButtonElement).classList.add("btn-success");
      } else if ((event.target as HTMLButtonElement).classList.contains("btn-success")) {
        (event.target as HTMLButtonElement).classList.remove("btn-success");
        (event.target as HTMLButtonElement).classList.add("btn-primary");
      } else {
        console.log("Something happened with button classes");
      }
      
      console.log(arg);
  }
  

}

class PulmonicConsonant {
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

enum PlaceOfArticulation {
  Bilabial,
  // Labiodental,
  // Dental,
  Alveolar,
  // AlveoloPalatal,
  // PalatoAlveolar,
  // Retroflex,
  // Palatal,
  Velar,
  // Uvular,
  // Pharyngeal,
  // Epiglottal,
  // Glottal
}

enum MannerOfArticulation {
  Stop,
  // Nasal,
  // Trill,
  // TapFlap,
  // LateralFlap,
  // Fricative,
  // TrillFricative,
  // LateralFricative,
  // Affricate,
  // Approximant,
  // LateralApproximant
}

enum Voicing {
  Voiceless,
  Voiced,
  // BreathyVoiced,
  // CreakyVoiced
}
