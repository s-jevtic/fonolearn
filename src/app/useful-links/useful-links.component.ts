import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: 'calc(35px + 16rem)',
      })),
      state('closed', style({
        width: 'calc(35px + 3rem)',
      })),
      transition('open => closed, closed => open', [
        animate('0.3s 0s ease-in-out'),
      ]),
    ]),
  ],
})
export class UsefulLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.toggled = false;
  }

  toggleSidebar() {
    (document.getElementById("sidebar-wrapper") as HTMLElement).classList.toggle("toggle");
    this.toggled = !this.toggled;
    // console.log((document.getElementById("menu-icon") as HTMLElement).classList + "\n" + (document.getElementById("links-menu") as HTMLElement).classList + "\n" + this.toggled);
  }

  toggled: boolean;
}
