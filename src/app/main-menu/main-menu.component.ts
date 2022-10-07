import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phone } from '../phones/phone';
import { PulmonicConsonant } from '../phones/pulmonicconsonant';
import { OtherPulmonic } from '../phones/otherpulmonic';
import { Implosive } from '../phones/implosive';
import { Ejective } from '../phones/ejective';
import { Click } from '../phones/click';
import { Voicing } from '../phones/voicing';
import { Vowel } from '../phones/vowel';
import { VowelHeight } from '../phones/vowelheight';
import { VowelBackness } from '../phones/vowelbackness';
import { VowelRoundedness } from '../phones/roundedness';
import { PhoneDataService } from '../phone-data.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  providers: [ PhoneDataService ]
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router, private phoneData: PhoneDataService) { }

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
  
    this.pulmonicConsonants = this.phoneData.pulmonicConsonants;
    this.otherPulmonic = this.phoneData.otherPulmonic;
    this.implosives = this.phoneData.implosives;
    this.ejectives = this.phoneData.ejectives;
    this.clicks = this.phoneData.clicks;

    this.consonants = [];
    this.consonants = this.consonants.concat(this.pulmonicConsonants, this.otherPulmonic, this.implosives, this.ejectives, this.clicks);
    
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
  }
  
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

    this.phoneData.checked = this.checked;
    console.log(this.phoneData.checked, this.checked);
  }
}