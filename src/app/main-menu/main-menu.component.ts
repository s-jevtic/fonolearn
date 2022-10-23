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
import { premadeSets } from '../phones/premade-sets';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router, private phoneDataService: PhoneDataService) { }

  ngOnInit(): void {
    this.premadeSets = premadeSets;
  
    this.pulmonicConsonants = this.phoneDataService.pulmonicConsonants;
    this.otherPulmonic = this.phoneDataService.otherPulmonic;
    this.implosives = this.phoneDataService.implosives;
    this.ejectives = this.phoneDataService.ejectives;
    this.clicks = this.phoneDataService.clicks;

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

    // this.vowels = [
    //   new Vowel("a", VowelHeight.Open, VowelBackness.Front, true),
    //   new Vowel("æ", VowelHeight.NearOpen, VowelBackness.Front, false),
    //   new Vowel("ɛ", VowelHeight.OpenMid, VowelBackness.Front, true),
    //   new Vowel("e", VowelHeight.CloseMid, VowelBackness.Front, true),
    //   new Vowel("ɪ", VowelHeight.NearClose, VowelBackness.Front, false),
    //   new Vowel("i", VowelHeight.Close, VowelBackness.Front, true),

    //   new Vowel("ɶ", VowelHeight.Open, VowelBackness.Front, false, VowelRoundedness.Compressed),
    //   new Vowel("œ", VowelHeight.OpenMid, VowelBackness.Front, false, VowelRoundedness.Compressed),
    //   new Vowel("ø", VowelHeight.CloseMid, VowelBackness.Front, false, VowelRoundedness.Compressed),
    //   new Vowel("ʏ", VowelHeight.NearClose, VowelBackness.Front, false, VowelRoundedness.Compressed),
    //   new Vowel("y", VowelHeight.Close, VowelBackness.Front, false, VowelRoundedness.Compressed),

    //   new Vowel("ɐ", VowelHeight.NearOpen, VowelBackness.Central, false),
    //   new Vowel("ɜ", VowelHeight.OpenMid, VowelBackness.Central, false),
    //   new Vowel("ə", VowelHeight.Mid, VowelBackness.Central, false, VowelRoundedness.Unrounded, Voicing.Voiced, "mid central vowel (schwa)"),
    //   new Vowel("ɘ", VowelHeight.CloseMid, VowelBackness.Central, false),
    //   new Vowel("ɨ", VowelHeight.Close, VowelBackness.Central, false),

    //   new Vowel("ɞ", VowelHeight.OpenMid, VowelBackness.Central, false, VowelRoundedness.RoundedUnspecified),
    //   new Vowel("ɵ", VowelHeight.CloseMid, VowelBackness.Central, false, VowelRoundedness.RoundedUnspecified),
    //   new Vowel("ʉ", VowelHeight.Close, VowelBackness.Central, false, VowelRoundedness.RoundedUnspecified),

    //   new Vowel("ɑ", VowelHeight.Open, VowelBackness.Back, false),
    //   new Vowel("ʌ", VowelHeight.OpenMid, VowelBackness.Back, false),
    //   new Vowel("ɤ", VowelHeight.CloseMid, VowelBackness.Back, false),
    //   new Vowel("ɯ", VowelHeight.Close, VowelBackness.Back, false),

    //   new Vowel("ɒ", VowelHeight.Open, VowelBackness.Back, false, VowelRoundedness.Protruded),
    //   new Vowel("ɔ", VowelHeight.OpenMid, VowelBackness.Back, true, VowelRoundedness.Protruded),
    //   new Vowel("o", VowelHeight.CloseMid, VowelBackness.Back, true, VowelRoundedness.Protruded),
    //   new Vowel("ʊ", VowelHeight.NearClose, VowelBackness.Back, false, VowelRoundedness.Protruded),
    //   new Vowel("u", VowelHeight.Close, VowelBackness.Back, true, VowelRoundedness.Protruded)
    // ]

    this.vowels = this.phoneDataService.vowels;

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
    console.log(this.vowelTable);

    // this.checked = [[], []];
    // for(let p in this.consonants) {
    //   this.checked[0].push(false);
    // }
    // for(let p in this.vowels) {
    //   this.checked[1].push(false);
    // }

    this.phoneChecked = new Map<Phone, boolean>();

    this.consonants.concat(this.vowels).forEach(p => {
      this.phoneChecked.set(p, false);
    })
    // this.consonants.map(p => {
    //   this.phoneChecked.set(p, false);
    // });
    // this.vowels.map(p => {
    //   this.phoneChecked.set(p, false);
    // });
  }

  ipa(event: any): void {
    let beginButton = document.getElementById("begin-button")!;
    // if (this.checked.flat().indexOf(true) == -1) { // if there is no true element in checked
    if (Array.from(this.phoneChecked.values()).indexOf(true) == -1) {
      alert("No phones selected!"); // placeholder, should make this a Bootstrap alert
    }
    this.router.navigate(["./ipa"]);
  }
  
  ipaCheck(event: any, p: Phone): void {
    let label = <HTMLLabelElement>document.getElementById("label" + p.symbol);
    // if(event.target.checked == true) {
    //   if(this.consonants.indexOf(p) != -1) {
    //     this.checked[0][this.consonants.indexOf(p)] = true;
    //   }
    //   else {
    //     this.checked[1][this.vowels.indexOf(p as Vowel)] = true;
    //   }
    //   label.classList.remove("btn-link");
    //   label.classList.add("btn-primary");
    // }
    // else {
    //   if(this.consonants.indexOf(p) != -1) {
    //     this.checked[0][this.consonants.indexOf(p)] = true;
    //   }
    //   else {
    //     this.checked[1][this.vowels.indexOf(p as Vowel)] = true;
    //   }
    //   label.classList.remove("btn-primary");
    //   label.classList.add("btn-link");
    // }

    label.classList.toggle("btn-primary");
    label.classList.toggle("btn-link");

    this.phoneChecked.set(p, !this.phoneChecked.get(p));

    this.phoneDataService.phoneChecked = this.phoneChecked;
  }

  ipaToggle(p: Phone): void { // similar to ipaCheck, but not meant for use with HTML
    let label = <HTMLLabelElement>document.getElementById("label" + p.symbol);
    let button = <HTMLInputElement>document.getElementById("btncheck" + p.symbol);
    if (!(label && button)) {
      console.log("No button for " + p.symbol + ", skipping...")
      return;
    }

    label.classList.toggle("btn-primary");
    label.classList.toggle("btn-link");
    button.checked = !button.checked;

    // if (this.consonants.includes(p)) {
    //   this.checked[0][this.consonants.indexOf(p)] = !this.checked[0][this.consonants.indexOf(p)];
    // }
    // else if (this.vowels.includes(p as Vowel)) {
    //   let v = p as Vowel;
    //   this.checked[1][this.vowels.indexOf(v)] = !this.checked[1][this.vowels.indexOf(v)];
    // }

    this.phoneChecked.set(p, !this.phoneChecked.get(p));

    this.phoneDataService.phoneChecked = this.phoneChecked;
  }

  loadSet(event: any, premadeSet: any): void {
    if (premadeSet != undefined) {
      // let checked: boolean[][] = [[], []];

      // for (let c of this.consonants) {
      //   if (premadeSet.consonants.includes(c.symbol)) {
      //     checked[0].push(true);
      //   }
      //   else {
      //     checked[0].push(false);
      //   }
      // }
      // for (let v of this.vowels) {
      //   if (premadeSet.vowels.includes(v.symbol)) {
      //     checked[1].push(true);
      //   }
      //   else {
      //     checked[1].push(false);
      //   }
      // }

      // this.consonants.forEach(p => {
      //   if (checked[0][this.consonants.indexOf(p)] != this.checked[0][this.consonants.indexOf(p)]) {
      //     this.ipaToggle(p);
      //   }
      // });
      // /*
      //   If the consonant should be checked and is already checked, do nothing.
      //   If it is not checked and should not be checked, do nothing.
      //   Else, ipaCheck(...) ...
      // */
      // this.vowels.forEach(p => {
      //   if (checked[1][this.vowels.indexOf(p)] != this.checked[1][this.vowels.indexOf(p)]) {
      //     this.ipaToggle(p);
      //   }
      // });
      // // same, but for vowels

      this.consonants.forEach(p => {
        if (this.phoneChecked.get(p) != premadeSet.consonants.includes(p.symbol)) {
          this.ipaToggle(p);
        }
      });
      this.vowels.forEach(p => {
        if (this.phoneChecked.get(p) != premadeSet.vowels.includes(p.symbol)) {
          this.ipaToggle(p);
        }
      });
    }
    else {
      console.log("Error: desired set ('" + premadeSet.setName + "') does not exist")
    }
  }

  selectConsonants(event: any): void {
    this.consonants.forEach(p => {
      // if (!this.checked[0][this.consonants.indexOf(p)]) {
      if (!this.phoneChecked.get(p)) {
        this.ipaToggle(p);
      }
    });
    this.vowels.forEach(p => {
      // if (this.checked[1][this.consonants.indexOf(p)]) {
      if (this.phoneChecked.get(p)) {
        this.ipaToggle(p);
      }
    });
  }
  selectVowels(event: any): void {
    this.consonants.forEach(p => {
      // if (this.checked[0][this.consonants.indexOf(p)]) {
      if (this.phoneChecked.get(p)) {
        this.ipaToggle(p);
      }
    });
    this.vowels.forEach(p => {
      // if (!this.checked[1][this.consonants.indexOf(p)]) {
      if (!this.phoneChecked.get(p)) {
        this.ipaToggle(p);
      }
    });
  }
  selectAll(event: any): void {
    this.consonants.forEach(p => {
      // if (!this.checked[0][this.consonants.indexOf(p)]) {
      if (!this.phoneChecked.get(p)) {
        this.ipaToggle(p);
      }
    });
    this.vowels.forEach(p => {
      // if (!this.checked[1][this.consonants.indexOf(p)]) {
      if (!this.phoneChecked.get(p)) {
        this.ipaToggle(p);
      }
    });
  }

  premadeSets: any;

  consonants: Phone[];
  pulmonicConsonants: PulmonicConsonant[];
  pulmonicTable: PulmonicConsonant[][][];
  otherPulmonic: OtherPulmonic[];
  implosives: Implosive[];
  ejectives: Ejective[];
  clicks: Click[];
  vowels: Vowel[];
  vowelTable: Vowel[][][];
  phones: Phone[];
  
  checked: boolean[][];
  phoneChecked: Map<Phone, boolean>;

  noneSelectedAlert: boolean;
}