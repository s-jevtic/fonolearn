import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ipa',
  templateUrl: './ipa.component.html',
  styleUrls: ['./ipa.component.css']
})
export class IpaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  set: string;

  static links = [
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Voiceless_bilabial_plosive.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_alveolar_plosive.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e3/Voiceless_velar_plosive.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_bilabial_plosive.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/0/01/Voiced_alveolar_plosive.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/1/12/Voiced_velar_plosive_02.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/PR-open_front_unrounded_vowel.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/7/71/Open-mid_front_unrounded_vowel.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6c/Close-mid_front_unrounded_vowel.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Close_front_unrounded_vowel.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/PR-open-mid_back_rounded_vowel.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5d/Close_back_rounded_vowel.ogg"
  ];
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

  links: string[];
  symbols: string[];

  //links = IpaComponent.links;
  //symbols = IpaComponent.symbols;

  ngOnInit(): void {
    this.guessedCount = 0;
    this.totalCount = 0;
    this.route.queryParams.subscribe((params: Params) => {
      this.set = params.set;
    });

    for(let i = 0; i < IpaComponent.links.length; i++)
    {
      IpaComponent.IPAMap.set(IpaComponent.links[i], IpaComponent.symbols[i]);
    }
    console.log(this.set);
    switch (this.set) {
      case "v": this.links = IpaComponent.links.slice(6, 13); this.symbols = IpaComponent.symbols.slice(6, 13); break;
      case "p": this.links = IpaComponent.links.slice(0, 6); this.symbols = IpaComponent.symbols.slice(0, 6); break;
      case "a": this.links = IpaComponent.links; this.symbols = IpaComponent.symbols; break;
      default: console.log("Error");
    }
    // console.log(this.links);
    this.newGuess();
  }

  newGuess(): void {
    this.listened = false;
    this.guessed = false;
    this.tried = false;
    this.clicked = [0, 0, 0]
    this.arg = -1;
    this.genRandomSound();
    this.genRandomSymbols();
    this.playSound();
  }

  static IPAMap = new Map<string, string>();

  listened = false;
  tried = false;
  guessed = false;
  arg = -1;

  clicked: number[] = [0, 0, 0];

  guessedCount = 0;
  totalCount = 0;

  randomSound: string = "";
  randomSymbols: string[] = ["", "", ""];

  genRandomSound(): void {
    this.randomSound = this.links[Math.floor(Math.random() * this.links.length)];
  }
  genRandomSymbols(): void { // Schwartzian transform (stackoverflow)
    let unshuffled = this.symbols;
    let shuffled = unshuffled
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
    this.randomSymbols = shuffled.slice(0, 3);
    for (let i=0; i<3; i++)
    {
      if (IpaComponent.IPAMap.get(this.randomSound) == shuffled[i]) return;
    }
    this.randomSymbols[Math.floor(Math.random() * this.randomSymbols.length)] = IpaComponent.IPAMap.get(this.randomSound)!;
  }

  playSound(): void {
    let audio = new Audio();
    audio.src = this.randomSound;
    audio.load();
    audio.play();
    this.listened = true;
  }

  checkAnswer(arg: number) {
    this.arg = arg;
    if (IpaComponent.IPAMap.get(this.randomSound) == this.randomSymbols[arg])
    {
      this.guessed = true;
      this.clicked[arg] = 2;
      if (!this.tried) this.guessedCount++;
    }
    else this.clicked[arg] = 1;
    if (!this.tried) this.totalCount++;
    this.tried = true;
  }

}
