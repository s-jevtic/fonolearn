import { Component, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { sidebarAnimation } from '../animations';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.css'],
  animations: [sidebarAnimation()],
})
export class UsefulLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.menuState = 'closed';
    this.show = false;
    this.toggled = false;
  }

  toggleSidebar() {
    this.menuState = this.menuState == 'closed'? 'open' : 'closed';
    this.toggled = !this.toggled;
  }

  animationStartEvent(event: AnimationEvent) {
    if(!this.toggled) {
      this.show = false;
    }
  }

  animationDoneEvent(event: AnimationEvent) {
    if(this.toggled) {
      this.show = true;
    }
  }

  menuState: string;
  show: boolean;
  toggled: boolean;
}
