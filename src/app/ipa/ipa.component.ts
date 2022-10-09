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
    this.noneSelected = true;

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

    if (this.selectedPhones.length != 0) {
      this.noneSelected = false;
      this.newGuess();
    }
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

  guessedCount = 0;
  totalCount = 0;

  genRandomSymbols(): void { // Schwartzian transform (stackoverflow)
    let unshuffled = this.selectedPhones;
    let shuffled = unshuffled
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
    
    this.randomPhones = shuffled.slice(0, 3);
    this.correctIndex = Math.floor(Math.random() * this.randomPhones.length);
  }

  playSound(): void {
    let audio = new Audio();
    audio.src = '../../assets/phones/' + this.randomPhones[this.correctIndex].symbol + '.mp3';
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

  noneSelected: boolean;

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
