import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneDataService } from '../phone-data.service';
import { Phone } from '../phones/phone';
import { Vowel } from '../phones/vowel';

@Component({
  selector: 'app-ipa',
  templateUrl: './ipa.component.html',
  styleUrls: ['./ipa.component.css']
})
export class IpaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private phoneDataService: PhoneDataService) { }

  ngOnInit(): void {
    this.noneSelected = true;

    let pulmonicConsonants = this.phoneDataService.pulmonicConsonants;
    let otherPulmonic = this.phoneDataService.otherPulmonic;
    let implosives = this.phoneDataService.implosives;
    let ejectives = this.phoneDataService.ejectives;
    let clicks = this.phoneDataService.clicks;

    this.consonants = [];
    this.consonants = this.consonants.concat(pulmonicConsonants, otherPulmonic, implosives, ejectives, clicks);
    this.selectedConsonants = this.consonants.filter(p => this.phoneDataService.phoneChecked.get(p));

    this.vowels = this.phoneDataService.vowels;
    this.selectedVowels = this.vowels.filter(p => this.phoneDataService.phoneChecked.get(p));

    this.selectedPhones = this.selectedConsonants.concat(this.selectedVowels)

    this.guessedCount = 0;
    this.totalCount = 0;

    if (this.selectedPhones.length != 0) {
      this.noneSelected = false;
      this.newGuess();
    }

  }

  newGuess(): void {
    this.guessed = false;
    this.tried = false;
    this.clicked = [0, 0, 0]
    this.arg = -1;
    this.genRandomSymbols();
    this.playSound();
    // document.getElementById("hintbutton")?.setAttribute("cPopover", this.randomPhones[this.correctIndex].desc);
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

    let filename = this.randomPhones[this.correctIndex].alias ?? this.randomPhones[this.correctIndex].symbol;
    audio.src = '../../assets/phones/' + filename + '.mp3';

    audio.load();
    audio.play();
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
