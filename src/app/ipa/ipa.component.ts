import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PhoneDataService } from '../phone-data.service';
import { Phone } from '../phones/phone';
import { Vowel } from '../phones/vowel';

@Component({
  selector: 'app-ipa',
  templateUrl: './ipa.component.html',
  styleUrls: ['./ipa.component.css']
})
export class IpaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private phoneData: PhoneDataService) { }

  // set: string;

  // links: string[];
  // symbols: string[];

  ngOnInit(): void {
    console.log(this.phoneData.pulmonicConsonants[0], this.phoneData.checked)

    let pulmonicConsonants = this.phoneData.pulmonicConsonants;
    let otherPulmonic = this.phoneData.otherPulmonic;
    let implosives = this.phoneData.implosives;
    let ejectives = this.phoneData.ejectives;
    let clicks = this.phoneData.clicks;

    this.consonants = [];
    this.consonants = this.consonants.concat(pulmonicConsonants, otherPulmonic, implosives, ejectives, clicks);
    this.selectedConsonants = this.consonants.filter((_, i) => this.phoneData.checked[0][i]);

    this.vowels = []; // placeholder
    this.selectedVowels = this.vowels.filter((_, i) => this.phoneData.checked[1][i]);

    this.selectedPhones = this.selectedConsonants.concat(this.selectedVowels)

    this.guessedCount = 0;
    this.totalCount = 0;
    // this.route.queryParams.subscribe((params: Params) => {
    //   this.set = params.set;
    // });

    // for(let i = 0; i < IpaComponent.links.length; i++)
    // {
    //   IpaComponent.IPAMap.set(IpaComponent.links[i], IpaComponent.symbols[i]);
    // }
    // console.log(this.set);
    // switch (this.set) {
    //   case "v": this.links = IpaComponent.links.slice(6, 13); this.symbols = IpaComponent.symbols.slice(6, 13); break;
    //   case "p": this.links = IpaComponent.links.slice(0, 6); this.symbols = IpaComponent.symbols.slice(0, 6); break;
    //   case "a": this.links = IpaComponent.links; this.symbols = IpaComponent.symbols; break;
    //   default: console.log("Error");
    // }
    // console.log(this.links);
    this.newGuess();
  }

  newGuess(): void {
    this.listened = false;
    this.guessed = false;
    this.tried = false;
    this.clicked = [0, 0, 0]
    this.arg = -1;
    this.genRandomSymbols();
    this.playSound();
  }

  // static IPAMap = new Map<string, string>();

  guessedCount = 0;
  totalCount = 0;

  // genRandomSound(): void {
  //   this.randomSound = this.links[Math.floor(Math.random() * this.links.length)];
  // }
  genRandomSymbols(): void { // Schwartzian transform (stackoverflow)
    let unshuffled = this.selectedPhones;
    let shuffled = unshuffled
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
    this.randomPhones = shuffled.slice(0, 3);
    console.log(this.randomPhones)
    // for (let i=0; i<this.randomPhones.length; i++)
    // {
    //   if (IpaComponent.IPAMap.get(this.randomSound) == shuffled[i]) return;
    // }
    this.correctIndex = Math.floor(Math.random() * this.randomPhones.length);
  }

  playSound(): void {
    let audio = new Audio();
    audio.src = '../../assets/phones/' + this.randomPhones[this.correctIndex] + '.mp3';
    audio.load();
    audio.play();
    this.listened = true;
  }

  checkAnswer(arg: number) {
    this.arg = arg;
    if (arg == this.correctIndex)
    {
      this.guessed = true;
      this.clicked[arg] = 2;
      if (!this.tried) this.guessedCount++;
    }
    else this.clicked[arg] = 1;
    if (!this.tried) this.totalCount++;
    this.tried = true;
  }

  listened: boolean;
  tried: boolean;
  guessed: boolean;
  arg: number;
  clicked: number[] = [0, 0, 0];

  consonants: Phone[];  
  selectedConsonants: Phone[];
  vowels: Vowel[];
  selectedVowels: Vowel[];
  selectedPhones: Phone[];

  randomPhones: Phone[];
  correctIndex: number;
}
