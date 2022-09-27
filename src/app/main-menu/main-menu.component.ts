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
import { Vowel } from '../phones/vowel';
import { VowelHeight } from '../phones/vowelheight';
import { VowelBackness } from '../phones/vowelbackness';
import { VowelRoundedness } from '../phones/roundedness';
import { consonantList } from '../phones/consonants';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router) { }

  consonants: Phone[];
  pulmonicConsonants: PulmonicConsonant[];
  pulmonicTable: PulmonicConsonant[][][];
  otherPulmonic: OtherPulmonic[];
  implosives: Implosive[];
  ejectives: Ejective[];
  clicks: Click[];
  vowels: Vowel[];
  vowelTable: Vowel[][][];
  
  checked: boolean[][];

  ngOnInit(): void {
    this.consonants = [
      // new PulmonicConsonant("p", Voicing.Voiceless, PlaceOfArticulation.Bilabial, MannerOfArticulation.Stop, true),
      // new PulmonicConsonant("t", Voicing.Voiceless, PlaceOfArticulation.Alveolar, MannerOfArticulation.Stop, true),
      // new PulmonicConsonant("ʈ", Voicing.Voiceless, PlaceOfArticulation.Retroflex, MannerOfArticulation.Stop, false),
      // new PulmonicConsonant("c", Voicing.Voiceless, PlaceOfArticulation.Palatal, MannerOfArticulation.Stop, false),
      // new PulmonicConsonant("k", Voicing.Voiceless, PlaceOfArticulation.Velar, MannerOfArticulation.Stop, true),
      // new PulmonicConsonant("q", Voicing.Voiceless, PlaceOfArticulation.Uvular, MannerOfArticulation.Stop, false),
      // new PulmonicConsonant("ʡ", Voicing.Voiceless, PlaceOfArticulation.Pharyngeal, MannerOfArticulation.Stop, false, "epiglottal plosive"),
      // new PulmonicConsonant("ʔ", Voicing.Voiceless, PlaceOfArticulation.Glottal, MannerOfArticulation.Stop, false, "glottal stop"),

      // new PulmonicConsonant("b", Voicing.Voiced, PlaceOfArticulation.Bilabial, MannerOfArticulation.Stop, true),
      // new PulmonicConsonant("d", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Stop, true),
      // new PulmonicConsonant("ɖ", Voicing.Voiced, PlaceOfArticulation.Retroflex, MannerOfArticulation.Stop, false),
      // new PulmonicConsonant("ɟ", Voicing.Voiced, PlaceOfArticulation.Palatal, MannerOfArticulation.Stop, false),
      // new PulmonicConsonant("g", Voicing.Voiced, PlaceOfArticulation.Velar, MannerOfArticulation.Stop, true),
      // new PulmonicConsonant("ɢ", Voicing.Voiced, PlaceOfArticulation.Uvular, MannerOfArticulation.Stop, false),

      // new PulmonicConsonant("m", Voicing.Voiced, PlaceOfArticulation.Bilabial, MannerOfArticulation.Nasal, false),
      // new PulmonicConsonant("ɱ", Voicing.Voiced, PlaceOfArticulation.Labiodental, MannerOfArticulation.Nasal, false),
      // new PulmonicConsonant("n", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Nasal, false),
      // new PulmonicConsonant("ɳ", Voicing.Voiced, PlaceOfArticulation.Retroflex, MannerOfArticulation.Nasal, false),
      // new PulmonicConsonant("ɲ", Voicing.Voiced, PlaceOfArticulation.Palatal, MannerOfArticulation.Nasal, false),
      // new PulmonicConsonant("ŋ", Voicing.Voiced, PlaceOfArticulation.Velar, MannerOfArticulation.Nasal, false),
      // new PulmonicConsonant("ɴ", Voicing.Voiced, PlaceOfArticulation.Uvular, MannerOfArticulation.Nasal, false),
      
      // new PulmonicConsonant("ʙ", Voicing.Voiced, PlaceOfArticulation.Bilabial, MannerOfArticulation.Trill, false),
      // new PulmonicConsonant("r", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Trill, false),
      // new PulmonicConsonant("ʀ", Voicing.Voiced, PlaceOfArticulation.Uvular, MannerOfArticulation.Trill, false),

      // new PulmonicConsonant("ɸ", Voicing.Voiceless, PlaceOfArticulation.Bilabial, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("f", Voicing.Voiceless, PlaceOfArticulation.Labiodental, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("θ", Voicing.Voiceless, PlaceOfArticulation.Dental, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("s", Voicing.Voiceless, PlaceOfArticulation.Alveolar, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("ʃ", Voicing.Voiceless, PlaceOfArticulation.PalatoAlveolar, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("ɕ", Voicing.Voiceless, PlaceOfArticulation.AlveoloPalatal, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("ʂ", Voicing.Voiceless, PlaceOfArticulation.Retroflex, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("ç", Voicing.Voiceless, PlaceOfArticulation.Palatal, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("x", Voicing.Voiceless, PlaceOfArticulation.Velar, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("χ", Voicing.Voiceless, PlaceOfArticulation.Uvular, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("ħ", Voicing.Voiceless, PlaceOfArticulation.Pharyngeal, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("β", Voicing.Voiced, PlaceOfArticulation.Bilabial, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("v", Voicing.Voiced, PlaceOfArticulation.Labiodental, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("ð", Voicing.Voiced, PlaceOfArticulation.Dental, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("z", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("ʒ", Voicing.Voiced, PlaceOfArticulation.PalatoAlveolar, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("ʑ", Voicing.Voiced, PlaceOfArticulation.AlveoloPalatal, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("ʐ", Voicing.Voiced, PlaceOfArticulation.Retroflex, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("ʝ", Voicing.Voiced, PlaceOfArticulation.Palatal, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("ɣ", Voicing.Voiced, PlaceOfArticulation.Velar, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("ʁ", Voicing.Voiced, PlaceOfArticulation.Uvular, MannerOfArticulation.Fricative, false),
      // new PulmonicConsonant("ʕ", Voicing.Voiced, PlaceOfArticulation.Pharyngeal, MannerOfArticulation.Fricative, false),

      // new PulmonicConsonant("ɬ", Voicing.Voiceless, PlaceOfArticulation.Alveolar, MannerOfArticulation.LateralFricative, false),
      // new PulmonicConsonant("ɮ", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.LateralFricative, false),

      // new PulmonicConsonant("h", Voicing.Voiceless, PlaceOfArticulation.Glottal, MannerOfArticulation.Approximant, false, "voiceless glottal approximant/fricative"),
      // new PulmonicConsonant("ʋ", Voicing.Voiced, PlaceOfArticulation.Labiodental, MannerOfArticulation.Approximant, false),
      // new PulmonicConsonant("ɹ", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Approximant, false),
      // new PulmonicConsonant("ɻ", Voicing.Voiced, PlaceOfArticulation.Retroflex, MannerOfArticulation.Approximant, false),
      // new PulmonicConsonant("j", Voicing.Voiced, PlaceOfArticulation.Palatal, MannerOfArticulation.Approximant, false),
      // new PulmonicConsonant("ɰ", Voicing.Voiced, PlaceOfArticulation.Velar, MannerOfArticulation.Approximant, false),
      // new PulmonicConsonant("ɦ", Voicing.BreathyVoiced, PlaceOfArticulation.Glottal, MannerOfArticulation.Approximant, false, "breathy voiced glottal approximant/fricative"),

      // new PulmonicConsonant("l", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.LateralApproximant, false),
      // new PulmonicConsonant("ɭ", Voicing.Voiced, PlaceOfArticulation.Retroflex, MannerOfArticulation.LateralApproximant, false),
      // new PulmonicConsonant("ʎ", Voicing.Voiced, PlaceOfArticulation.Palatal, MannerOfArticulation.LateralApproximant, false),
      // new PulmonicConsonant("ʟ", Voicing.Voiced, PlaceOfArticulation.Velar, MannerOfArticulation.LateralApproximant, false),

      // new PulmonicConsonant("t͡s", Voicing.Voiceless, PlaceOfArticulation.Alveolar, MannerOfArticulation.Affricate, false),
      // new PulmonicConsonant("t͡ʃ", Voicing.Voiceless, PlaceOfArticulation.PalatoAlveolar, MannerOfArticulation.Affricate, false),
      // new PulmonicConsonant("t͡ɕ", Voicing.Voiceless, PlaceOfArticulation.AlveoloPalatal, MannerOfArticulation.Affricate, false),
      // new PulmonicConsonant("ʈ͡ʂ", Voicing.Voiceless, PlaceOfArticulation.Retroflex, MannerOfArticulation.Affricate, false),
      // new PulmonicConsonant("d͡z", Voicing.Voiced, PlaceOfArticulation.Alveolar, MannerOfArticulation.Affricate, false),
      // new PulmonicConsonant("d͡ʒ", Voicing.Voiced, PlaceOfArticulation.PalatoAlveolar, MannerOfArticulation.Affricate, false),
      // new PulmonicConsonant("d͡ʑ", Voicing.Voiced, PlaceOfArticulation.AlveoloPalatal, MannerOfArticulation.Affricate, false),
      // new PulmonicConsonant("ɖ͡ʐ", Voicing.Voiced, PlaceOfArticulation.Retroflex, MannerOfArticulation.Affricate, false),

      new OtherPulmonic("ʍ", Voicing.Voiceless, MannerOfArticulation.Approximant, false, "voiceless labiovelar approximant/fricative"),
      new OtherPulmonic("w", Voicing.Voiced, MannerOfArticulation.Approximant, false, "voiced labiovelar approximant"),
      new OtherPulmonic("ɥ", Voicing.Voiced, MannerOfArticulation.Approximant, false, "voiced labiopalatal approximant"),
      new OtherPulmonic("ɺ", Voicing.Voiced, MannerOfArticulation.TapFlap, false, "voiced alveolar lateral flap"),
      new OtherPulmonic("ɧ", Voicing.Voiceless, MannerOfArticulation.Fricative, false, "simultaneous ʃ and x"),

      new Implosive("ɓ", PlaceOfArticulation.Bilabial, false),
      new Implosive("ɗ", PlaceOfArticulation.Alveolar, false),
      new Implosive("ʄ", PlaceOfArticulation.Palatal, false),
      new Implosive("ɠ", PlaceOfArticulation.Velar, false),
      new Implosive("ʛ", PlaceOfArticulation.Uvular, false),

      new Ejective("pʼ", PlaceOfArticulation.Bilabial, MannerOfArticulation.Stop, false),
      new Ejective("tʼ", PlaceOfArticulation.Alveolar, MannerOfArticulation.Stop, false),
      new Ejective("kʼ", PlaceOfArticulation.Velar, MannerOfArticulation.Stop, false),
      new Ejective("sʼ", PlaceOfArticulation.Alveolar, MannerOfArticulation.Fricative, false),

      new Click("ʘ", PlaceOfArticulation.Bilabial, false, false),
      new Click("ǀ", PlaceOfArticulation.Dental, false, false),
      new Click("ǃ", PlaceOfArticulation.Alveolar, false, false),
      new Click("ǂ", PlaceOfArticulation.PalatoAlveolar, false, false),
      new Click("ǁ", PlaceOfArticulation.Alveolar, true, false),
    ];

    let i = 0;
    this.pulmonicConsonants = [];
    for(let p of consonantList.pulmonicConsonants) {
      this.pulmonicConsonants.push(PulmonicConsonant.fromObject(p));
      console.log(this.pulmonicConsonants[i])
      i++;
    }
    this.pulmonicTable = [[[]]];
    for(let consonant of this.pulmonicConsonants)
    {
      while(this.pulmonicTable.length <= consonant.manner) {
        this.pulmonicTable.push([[PulmonicConsonant.NullConsonant, PulmonicConsonant.NullConsonant]]);
      }
      while(this.pulmonicTable[consonant.manner].length <= consonant.place) {
        this.pulmonicTable[consonant.manner].push([PulmonicConsonant.NullConsonant, PulmonicConsonant.NullConsonant]);
      }
      this.pulmonicTable[consonant.manner][consonant.place][consonant.voicing > 0 ? 1 : 0] = consonant;
    }

    this.vowels = [
      new Vowel("a", VowelHeight.Open, VowelBackness.Front, true),
      new Vowel("æ", VowelHeight.NearOpen, VowelBackness.Front, false),
      new Vowel("ɛ", VowelHeight.OpenMid, VowelBackness.Front, true),
      new Vowel("e", VowelHeight.CloseMid, VowelBackness.Front, true),
      new Vowel("ɪ", VowelHeight.NearClose, VowelBackness.Front, false),
      new Vowel("i", VowelHeight.Close, VowelBackness.Front, true),

      new Vowel("ɶ", VowelHeight.Open, VowelBackness.Front, false, VowelRoundedness.Compressed),
      new Vowel("œ", VowelHeight.OpenMid, VowelBackness.Front, false, VowelRoundedness.Compressed),
      new Vowel("ø", VowelHeight.CloseMid, VowelBackness.Front, false, VowelRoundedness.Compressed),
      new Vowel("ʏ", VowelHeight.NearClose, VowelBackness.Front, false, VowelRoundedness.Compressed),
      new Vowel("y", VowelHeight.Close, VowelBackness.Front, false, VowelRoundedness.Compressed),

      new Vowel("ɐ", VowelHeight.NearOpen, VowelBackness.Central, false),
      new Vowel("ɜ", VowelHeight.OpenMid, VowelBackness.Central, false),
      new Vowel("ə", VowelHeight.Mid, VowelBackness.Central, false, VowelRoundedness.Unrounded, Voicing.Voiced, "mid central vowel (schwa)"),
      new Vowel("ɘ", VowelHeight.CloseMid, VowelBackness.Central, false),
      new Vowel("ɨ", VowelHeight.Close, VowelBackness.Central, false),

      new Vowel("ɞ", VowelHeight.OpenMid, VowelBackness.Central, false, VowelRoundedness.RoundedUnspecified),
      new Vowel("ɵ", VowelHeight.CloseMid, VowelBackness.Central, false, VowelRoundedness.RoundedUnspecified),
      new Vowel("ʉ", VowelHeight.Close, VowelBackness.Central, false, VowelRoundedness.RoundedUnspecified),

      new Vowel("ɑ", VowelHeight.Open, VowelBackness.Back, false),
      new Vowel("ʌ", VowelHeight.OpenMid, VowelBackness.Back, false),
      new Vowel("ɤ", VowelHeight.CloseMid, VowelBackness.Back, false),
      new Vowel("ɯ", VowelHeight.Close, VowelBackness.Back, false),

      new Vowel("ɒ", VowelHeight.Open, VowelBackness.Back, false, VowelRoundedness.Protruded),
      new Vowel("ɔ", VowelHeight.OpenMid, VowelBackness.Back, true, VowelRoundedness.Protruded),
      new Vowel("o", VowelHeight.CloseMid, VowelBackness.Back, true, VowelRoundedness.Protruded),
      new Vowel("ʊ", VowelHeight.NearClose, VowelBackness.Back, false, VowelRoundedness.Protruded),
      new Vowel("u", VowelHeight.Close, VowelBackness.Back, true, VowelRoundedness.Protruded)
    ]

    this.vowelTable = [[[]]];
    for(let vowel of this.vowels) {
      while(this.vowelTable.length <= vowel.height) {
        this.vowelTable.push([[Vowel.NullVowel, Vowel.NullVowel]]);
      }
      while(this.vowelTable[vowel.height].length <= vowel.backness) {
        this.vowelTable[vowel.height].push([Vowel.NullVowel, Vowel.NullVowel]);
      }
      this.vowelTable[vowel.height][vowel.backness][vowel.roundedness != VowelRoundedness.Unrounded ? 1 : 0] = vowel;
    }

    this.checked = [[], []];
    for(let p in this.consonants) {
      this.checked[0].push(false);
    }
    for(let p in this.vowels) {
      this.checked[1].push(false);
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
      if(this.consonants.indexOf(p) != -1) {
        this.checked[0][this.consonants.indexOf(p)] = true;
      }
      else {
        this.checked[1][this.vowels.indexOf(p as Vowel)] = true;
      }
      label.classList.remove("btn-link");
      label.classList.add("btn-primary");
    }
    else {
      if(this.consonants.indexOf(p) != -1) {
        this.checked[0][this.consonants.indexOf(p)] = true;
      }
      else {
        this.checked[1][this.vowels.indexOf(p as Vowel)] = true;
      }
      label.classList.remove("btn-primary");
      label.classList.add("btn-link");
    }
  }
}