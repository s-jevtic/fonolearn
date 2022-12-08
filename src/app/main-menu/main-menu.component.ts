import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phone } from '../phones/phone';
import { PulmonicConsonant } from '../phones/pulmonicconsonant';
import { OtherPulmonic } from '../phones/otherpulmonic';
import { Implosive } from '../phones/implosive';
import { Ejective } from '../phones/ejective';
import { Click } from '../phones/click';
import { Vowel } from '../phones/vowel';
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

    this.phoneChecked = new Map<Phone, boolean>();

    this.consonants.concat(this.vowels).forEach(p => {
      this.phoneChecked.set(p, false);
    })
  }

  ipa(event: any): void {
    let beginButton = document.getElementById("begin-button")!;
    if (this.noneSelected()) { // if there is no true element in checked
      alert("No phones selected!"); // placeholder, should make this a Bootstrap alert
    }
    else this.router.navigate(["./ipa"]);
  }
  
  ipaCheck(event: any, p: Phone): void {
    let label = <HTMLLabelElement>document.getElementById("label" + p.symbol);

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

    this.phoneChecked.set(p, !this.phoneChecked.get(p));

    this.phoneDataService.phoneChecked = this.phoneChecked;
  }

  loadSet(event: any, premadeSet: any): void {
    if (premadeSet != undefined) {
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
      if (!this.phoneChecked.get(p)) {
        this.ipaToggle(p);
      }
    });
    this.vowels.forEach(p => {
      if (this.phoneChecked.get(p)) {
        this.ipaToggle(p);
      }
    });
  }
  selectVowels(event: any): void {
    this.consonants.forEach(p => {
      if (this.phoneChecked.get(p)) {
        this.ipaToggle(p);
      }
    });
    this.vowels.forEach(p => {
      if (!this.phoneChecked.get(p)) {
        this.ipaToggle(p);
      }
    });
  }
  selectAll(event: any): void {
    this.consonants.forEach(p => {
      if (!this.phoneChecked.get(p)) {
        this.ipaToggle(p);
      }
    });
    this.vowels.forEach(p => {
      if (!this.phoneChecked.get(p)) {
        this.ipaToggle(p);
      }
    });
  }

  noneSelected(): boolean {
    return Array.from(this.phoneChecked.values()).indexOf(true) == -1;
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