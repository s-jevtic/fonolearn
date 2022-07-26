import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  @Output() sendSetEmitter = new EventEmitter();

  sendSet(set: string) {
    this.sendSetEmitter.emit(set);
  }
}
