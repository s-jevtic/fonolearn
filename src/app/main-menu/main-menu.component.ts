import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phone } from '../phones/phone';
import { PulmonicConsonant } from '../phones/pulmonicconsonant';
import { OtherPulmonic } from '../phones/otherpulmonic';
import { Implosive } from '../phones/implosive';
import { Ejective } from '../phones/ejective';
import { Click } from '../phones/click';
import { Voicing } from '../phones/voicing';
import { MannerOfArticulation } from '../phones/mannerofarticulation';
import { PlaceOfArticulation } from '../phones/placeofarticulation';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router) { }

  consonants: Phone[];
  pulmonicTable: PulmonicConsonant[][][];
  otherPulmonic: OtherPulmonic[];
  implosives: Implosive[];
  ejectives: Ejective[];
  clicks: Click[];
  
  checked: boolean[];

  ngOnInit(): void {
    this.consonants = [
      new PulmonicConsonant("p", Voicing.Voiceless, PlaceOfArticulation.Bilabial, MannerOfArticulation.Stop, true),
      new PulmonicConsonant("t", Voicing.Voiceless, PlaceOfArticulation.Alveolar, MannerOfArticulation.Stop, true),
      new PulmonicConsonant("ʈ", Voicing.Voiceless, PlaceOfArticulation.Retroflex, MannerOfArticulation.Stop, false),
      new PulmonicConsonant("c", Voicing.Voiceless, PlaceOfArticulation.Palatal, MannerOfArticulation.Stop, false),
      new PulmonicConsonant("k", Voicing.Voiceless, PlaceOfArticulation.Velar, MannerOfArticulation.Stop, true),
      new PulmonicConsonant("q", Voicing.Voiceless, PlaceOfArticulation.Uvular, MannerOfArticulation.Stop, false),
      new PulmonicConsonant("ʡ", Voicing.Voiceless, PlaceOfArticulation.Pharyngeal, MannerOfArticulation.Stop, false, "epiglottal plosive"),
      new PulmonicConsonant("ʔ", Voicing.Voiceless, PlaceOfArticulation.Glottal, MannerOfArticulation.Stop, false, "glottal stop"),

      new PulmonicConsonant("b", Voicing.Voiced, PlaceOfArticulation.Bilabial, MannerOfArticulation.Stop, true),
      new PulmonicConsonant("d", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Stop, true),
      new PulmonicConsonant("ɖ", Voicing.Voiced, PlaceOfArticulation.Retroflex, MannerOfArticulation.Stop, false),
      new PulmonicConsonant("ɟ", Voicing.Voiced, PlaceOfArticulation.Palatal, MannerOfArticulation.Stop, false),
      new PulmonicConsonant("g", Voicing.Voiced, PlaceOfArticulation.Velar, MannerOfArticulation.Stop, true),
      new PulmonicConsonant("ɢ", Voicing.Voiced, PlaceOfArticulation.Uvular, MannerOfArticulation.Stop, false),

      new PulmonicConsonant("m", Voicing.Voiced, PlaceOfArticulation.Bilabial, MannerOfArticulation.Nasal, false),
      new PulmonicConsonant("ɱ", Voicing.Voiced, PlaceOfArticulation.Labiodental, MannerOfArticulation.Nasal, false),
      new PulmonicConsonant("n", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Nasal, false),
      new PulmonicConsonant("ɳ", Voicing.Voiced, PlaceOfArticulation.Retroflex, MannerOfArticulation.Nasal, false),
      new PulmonicConsonant("ɲ", Voicing.Voiced, PlaceOfArticulation.Palatal, MannerOfArticulation.Nasal, false),
      new PulmonicConsonant("ŋ", Voicing.Voiced, PlaceOfArticulation.Velar, MannerOfArticulation.Nasal, false),
      new PulmonicConsonant("ɴ", Voicing.Voiced, PlaceOfArticulation.Uvular, MannerOfArticulation.Nasal, false),
      
      new PulmonicConsonant("ʙ", Voicing.Voiced, PlaceOfArticulation.Bilabial, MannerOfArticulation.Trill, false),
      new PulmonicConsonant("r", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Trill, false),
      new PulmonicConsonant("ʀ", Voicing.Voiced, PlaceOfArticulation.Uvular, MannerOfArticulation.Trill, false),

      new PulmonicConsonant("ɸ", Voicing.Voiceless, PlaceOfArticulation.Bilabial, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("f", Voicing.Voiceless, PlaceOfArticulation.Labiodental, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("θ", Voicing.Voiceless, PlaceOfArticulation.Dental, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("s", Voicing.Voiceless, PlaceOfArticulation.Alveolar, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("ʃ", Voicing.Voiceless, PlaceOfArticulation.PalatoAlveolar, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("ɕ", Voicing.Voiceless, PlaceOfArticulation.AlveoloPalatal, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("ʂ", Voicing.Voiceless, PlaceOfArticulation.Retroflex, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("ç", Voicing.Voiceless, PlaceOfArticulation.Palatal, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("x", Voicing.Voiceless, PlaceOfArticulation.Velar, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("χ", Voicing.Voiceless, PlaceOfArticulation.Uvular, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("ħ", Voicing.Voiceless, PlaceOfArticulation.Pharyngeal, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("β", Voicing.Voiced, PlaceOfArticulation.Bilabial, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("v", Voicing.Voiced, PlaceOfArticulation.Labiodental, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("ð", Voicing.Voiced, PlaceOfArticulation.Dental, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("z", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("ʒ", Voicing.Voiced, PlaceOfArticulation.PalatoAlveolar, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("ʑ", Voicing.Voiced, PlaceOfArticulation.AlveoloPalatal, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("ʐ", Voicing.Voiced, PlaceOfArticulation.Retroflex, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("ʝ", Voicing.Voiced, PlaceOfArticulation.Palatal, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("ɣ", Voicing.Voiced, PlaceOfArticulation.Velar, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("ʁ", Voicing.Voiced, PlaceOfArticulation.Uvular, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("ʕ", Voicing.Voiced, PlaceOfArticulation.Pharyngeal, MannerOfArticulation.Fricative, false),

      new PulmonicConsonant("ɬ", Voicing.Voiceless, PlaceOfArticulation.Alveolar, MannerOfArticulation.LateralFricative, false),
      new PulmonicConsonant("ɮ", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.LateralFricative, false),

      new PulmonicConsonant("h", Voicing.Voiceless, PlaceOfArticulation.Glottal, MannerOfArticulation.Approximant, false, "voiceless glottal approximant/fricative"),
      new PulmonicConsonant("ʋ", Voicing.Voiced, PlaceOfArticulation.Labiodental, MannerOfArticulation.Approximant, false),
      new PulmonicConsonant("ɹ", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Approximant, false),
      new PulmonicConsonant("ɻ", Voicing.Voiced, PlaceOfArticulation.Retroflex, MannerOfArticulation.Approximant, false),
      new PulmonicConsonant("j", Voicing.Voiced, PlaceOfArticulation.Palatal, MannerOfArticulation.Approximant, false),
      new PulmonicConsonant("ɰ", Voicing.Voiced, PlaceOfArticulation.Velar, MannerOfArticulation.Approximant, false),
      new PulmonicConsonant("ɦ", Voicing.BreathyVoiced, PlaceOfArticulation.Glottal, MannerOfArticulation.Approximant, false, "breathy voiced glottal approximant/fricative"),

      new PulmonicConsonant("l", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.LateralApproximant, false),
      new PulmonicConsonant("ɭ", Voicing.Voiced, PlaceOfArticulation.Retroflex, MannerOfArticulation.LateralApproximant, false),
      new PulmonicConsonant("ʎ", Voicing.Voiced, PlaceOfArticulation.Palatal, MannerOfArticulation.LateralApproximant, false),
      new PulmonicConsonant("ʟ", Voicing.Voiced, PlaceOfArticulation.Velar, MannerOfArticulation.LateralApproximant, false),

      new PulmonicConsonant("t͡s", Voicing.Voiceless, PlaceOfArticulation.Alveolar, MannerOfArticulation.Affricate, false),
      new PulmonicConsonant("t͡ʃ", Voicing.Voiceless, PlaceOfArticulation.PalatoAlveolar, MannerOfArticulation.Affricate, false),
      new PulmonicConsonant("t͡ɕ", Voicing.Voiceless, PlaceOfArticulation.AlveoloPalatal, MannerOfArticulation.Affricate, false),
      new PulmonicConsonant("ʈ͡ʂ", Voicing.Voiceless, PlaceOfArticulation.Retroflex, MannerOfArticulation.Affricate, false),
      new PulmonicConsonant("d͡z", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Affricate, false),
      new PulmonicConsonant("d͡ʒ", Voicing.Voiced, PlaceOfArticulation.PalatoAlveolar, MannerOfArticulation.Affricate, false),
      new PulmonicConsonant("d͡ʑ", Voicing.Voiced, PlaceOfArticulation.AlveoloPalatal, MannerOfArticulation.Affricate, false),
      new PulmonicConsonant("ɖ͡ʐ", Voicing.Voiced, PlaceOfArticulation.Retroflex, MannerOfArticulation.Affricate, false),

      new Click("ʘ", PlaceOfArticulation.Bilabial, false, false),
      new Click("ǀ", PlaceOfArticulation.Dental, false, false),
      new Click("ǃ", PlaceOfArticulation.Alveolar, false, false),
      new Click("ǂ", PlaceOfArticulation.PalatoAlveolar, false, false),
      new Click("ǁ", PlaceOfArticulation.Alveolar, true, false),
    ];

    this.pulmonicTable = [[[]]];
    for(let consonant of (this.consonants.filter(c => c instanceof PulmonicConsonant) as PulmonicConsonant[])) // maybe find a better way to implement this
    {
      consonant = consonant as PulmonicConsonant;
      // let i = this.pulmonicTable.length - 1;
      // let j = this.pulmonicTable[i].length - 1;

      // console.log(consonant.symbol + ": " + (i + 1) + "; " + (j + 1));
      while(this.pulmonicTable.length <= consonant.manner) {
        // console.log(consonant.symbol + " (): " + this.pulmonicTable.length +  " <= " + consonant.manner);
        // console.log(this.pulmonicTable)
        this.pulmonicTable.push([[PulmonicConsonant.NullConsonant, PulmonicConsonant.NullConsonant]]);
        // i++;
      }
      // console.log(consonant.symbol + ": " + (i + 1) + "; " + (j + 1));
      while(this.pulmonicTable[consonant.manner].length <= consonant.place) {
        // console.log(consonant.symbol + " (P): " + this.pulmonicTable[i].length +  " <= " + consonant.place);
        // console.log(this.pulmonicTable);
        this.pulmonicTable[consonant.manner].push([PulmonicConsonant.NullConsonant, PulmonicConsonant.NullConsonant]);
        // j++;
      }
      // console.log(consonant.symbol + ": " + (i + 1) + ", " + (j + 1) + "; " + consonant.manner + ", " + consonant.place);
      this.pulmonicTable[consonant.manner][consonant.place][consonant.voicing > 0 ? 1 : 0] = consonant;
    }
    // console.log(this.pulmonicTable);
    this.checked = [];
    for(let p in this.consonants) {
      this.checked.push(false);
    }

    this.otherPulmonic = this.consonants.filter(c => c instanceof OtherPulmonic) as OtherPulmonic[];
    this.implosives = this.consonants.filter(c => c instanceof Implosive) as Implosive[];
    this.ejectives = this.consonants.filter(c => c instanceof Ejective) as Ejective[];
    this.clicks = this.consonants.filter(c => c instanceof Click) as Click[];
  }

  // ipaClick(arg: PulmonicConsonant): void {      
  //     console.log(arg);
  // }
  
  ipaCheck(event: any, p: Phone): void {
    console.log(p.symbol + ": " + event.target.checked);
    let label = <HTMLLabelElement>document.getElementById("label" + p.symbol);
    if(event.target.checked == true) {
      this.checked[this.consonants.indexOf(p)] = true;
      label.classList.remove("btn-link");
      label.classList.add("btn-primary");
    }
    else {
      this.checked[this.consonants.indexOf(p)] = false;
      label.classList.remove("btn-primary");
      label.classList.add("btn-link");
    }
  }
}