import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phone } from '../phones/phone';
import { PulmonicConsonant } from '../phones/pulmonicconsonant';
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

  // p: PulmonicConsonant;
  // t: PulmonicConsonant;
  // k: PulmonicConsonant;
  // b: PulmonicConsonant;
  // d: PulmonicConsonant;
  // g: PulmonicConsonant;
  pulmonicConsonants: PulmonicConsonant[];
  pulmonicTable: PulmonicConsonant[][][];
  checkedPulmonic: boolean[];

  ngOnInit(): void {
    this.pulmonicConsonants = [
      new PulmonicConsonant("p", Voicing.Voiceless, PlaceOfArticulation.Bilabial, MannerOfArticulation.Stop, true),
      new PulmonicConsonant("t", Voicing.Voiceless, PlaceOfArticulation.Alveolar, MannerOfArticulation.Stop, true),
      new PulmonicConsonant("c", Voicing.Voiceless, PlaceOfArticulation.Palatal, MannerOfArticulation.Stop, false),
      new PulmonicConsonant("k", Voicing.Voiceless, PlaceOfArticulation.Velar, MannerOfArticulation.Stop, true),
      new PulmonicConsonant("q", Voicing.Voiceless, PlaceOfArticulation.Uvular, MannerOfArticulation.Stop, false),
      new PulmonicConsonant("b", Voicing.Voiced, PlaceOfArticulation.Bilabial, MannerOfArticulation.Stop, true),
      new PulmonicConsonant("d", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Stop, true),
      new PulmonicConsonant("g", Voicing.Voiced, PlaceOfArticulation.Velar, MannerOfArticulation.Stop, true),
      new PulmonicConsonant("m", Voicing.Voiced, PlaceOfArticulation.Bilabial, MannerOfArticulation.Nasal, false),
      new PulmonicConsonant("n", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Nasal, false),
      new PulmonicConsonant("r", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Trill, false),
      new PulmonicConsonant("f", Voicing.Voiceless, PlaceOfArticulation.Labiodental, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("v", Voicing.Voiced, PlaceOfArticulation.Labiodental, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("s", Voicing.Voiceless, PlaceOfArticulation.Alveolar, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("z", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("x", Voicing.Voiceless, PlaceOfArticulation.Velar, MannerOfArticulation.Fricative, false),
      new PulmonicConsonant("j", Voicing.Voiced, PlaceOfArticulation.Palatal, MannerOfArticulation.Approximant, false),
      new PulmonicConsonant("h", Voicing.Voiceless, PlaceOfArticulation.Glottal, MannerOfArticulation.Approximant, false),
      new PulmonicConsonant("l", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.LateralApproximant, false),
    ];

    this.pulmonicTable = [[[]]];
    for(let consonant of this.pulmonicConsonants)
    {
      let i = this.pulmonicTable.length - 1;
      let j = this.pulmonicTable[i].length - 1;

      console.log(consonant.symbol + ": " + (i + 1) + "; " + (j + 1));
      while(this.pulmonicTable.length <= consonant.manner) {
        console.log(consonant.symbol + " (): " + this.pulmonicTable.length +  " <= " + consonant.manner);
        console.log(this.pulmonicTable)
        this.pulmonicTable.push([[PulmonicConsonant.NullConsonant, PulmonicConsonant.NullConsonant]]);
        i++;
      }
      console.log(consonant.symbol + ": " + (i + 1) + "; " + (j + 1));
      while(this.pulmonicTable[i].length <= consonant.place) {
        console.log(consonant.symbol + " (P): " + this.pulmonicTable[i].length +  " <= " + consonant.place);
        console.log(this.pulmonicTable);
        this.pulmonicTable[i].push([PulmonicConsonant.NullConsonant, PulmonicConsonant.NullConsonant]);
        j++;
      }
      console.log(consonant.symbol + ": " + (i + 1) + "; " + (j + 1));
      this.pulmonicTable[consonant.manner][consonant.place][consonant.voicing] = consonant;
    }
    // console.log(this.pulmonicTable);
    this.checkedPulmonic = [];
    for(let p in this.pulmonicConsonants) {
      this.checkedPulmonic.push(false);
    }

    // let temp: string[] = [];
    
    //   for (let i = 0; i < MainMenuComponent.symbols.length; i++) {

    //       console.log(MainMenuComponent.symbols[i]);
    //       temp.push(MainMenuComponent.symbols[i]);
    //       if ( (i + 1) % this.rowsize == 0 || i + 1 == MainMenuComponent.symbols.length ) {
    //           this.tablesymbols.push(temp);
    //           temp = [];
    //       }

    //   }

  }

  ipaClick(arg: PulmonicConsonant): void {      
      console.log(arg);
  }
  
  ipaCheck(event: any, p: PulmonicConsonant): void {
    console.log(p.symbol + ": " + event.target.checked);
    let label = <HTMLLabelElement>document.getElementById("label" + p.symbol);
    if(event.target.checked == true) {
      this.checkedPulmonic[this.pulmonicConsonants.indexOf(p)] = true;
      label.classList.remove("btn-link");
      label.classList.add("btn-primary");
    }
    else {
      this.checkedPulmonic[this.pulmonicConsonants.indexOf(p)] = false;
      label.classList.remove("btn-primary");
      label.classList.add("btn-link");
    }
  }
}