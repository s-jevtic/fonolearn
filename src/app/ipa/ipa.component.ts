import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipa',
  templateUrl: './ipa.component.html',
  styleUrls: ['./ipa.component.css']
})
export class IpaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.guessedCount = 0;
    this.totalCount = 0;
    for(let i = 0; i < IpaComponent.links.length; i++)
    {
      IpaComponent.IPAMap.set(IpaComponent.links[i], IpaComponent.symbols[i]);
    }
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

  static links = [
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Voiceless_bilabial_plosive.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_alveolar_plosive.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e3/Voiceless_velar_plosive.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_bilabial_plosive.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/0/01/Voiced_alveolar_plosive.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/1/12/Voiced_velar_plosive_02.ogg"
  ];
  static symbols = [
    "p",
    "t",
    "k",
    "b",
    "d",
    "g"
  ];

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
    this.randomSound = IpaComponent.links[Math.floor(Math.random() * IpaComponent.links.length)];
  }
  genRandomSymbols(): void { // Schwartzian transform (stackoverflow)
    let unshuffled = IpaComponent.symbols;

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
