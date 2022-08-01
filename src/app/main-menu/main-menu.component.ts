import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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

  ngOnInit(): void {

    let temp: string[] = [];
    
    for (let i = 0; i < MainMenuComponent.symbols.length; i++) {

      //console.log(MainMenuComponent.symbols[i]);
      temp.push(MainMenuComponent.symbols[i]);
      if ( (i + 1) % this.rowsize == 0 || i + 1 == MainMenuComponent.symbols.length ) {
        this.tablesymbols.push(temp);
        temp = [];
      }

    }

  }

  ipaClick(event: MouseEvent, arg: string): void {
      if ((event.target as HTMLButtonElement).classList.contains("btn-primary")) {
        (event.target as HTMLButtonElement).classList.remove("btn-primary");
        (event.target as HTMLButtonElement).classList.add("btn-success");
      } else if ((event.target as HTMLButtonElement).classList.contains("btn-success")) {
        (event.target as HTMLButtonElement).classList.remove("btn-success");
        (event.target as HTMLButtonElement).classList.add("btn-primary");
      } else {
        console.log("Something happened with button classes");
      }
      
      console.log(arg);
  }
  

}
