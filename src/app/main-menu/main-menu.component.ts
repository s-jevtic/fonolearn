import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  p: PulmonicConsonant;
  t: PulmonicConsonant;
  k: PulmonicConsonant;
  b: PulmonicConsonant;
  d: PulmonicConsonant;
  g: PulmonicConsonant;

  ngOnInit(): void {
    // this.p = new PulmonicConsonant("p", Voicing.Voiceless, PlaceOfArticulation.Bilabial, MannerOfArticulation.Stop);
    let temp: string[] = [];
    
      for (let i = 0; i < MainMenuComponent.symbols.length; i++) {

          console.log(MainMenuComponent.symbols[i]);
          temp.push(MainMenuComponent.symbols[i]);
          if ( (i + 1) % this.rowsize == 0 || i + 1 == MainMenuComponent.symbols.length ) {
              this.tablesymbols.push(temp);
              temp = [];
          }

      }

  }

  ipaClick(arg: string): void {      
      console.log(arg);
  }
  

}