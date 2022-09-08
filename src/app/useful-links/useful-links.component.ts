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
      transition('open <=> closed', [
        animate('3s ease-in-out'),
      ]),
    ]),
    trigger('changeIcon', [
      state('cross1', style({
        transform: 'rotate(-45deg) translate(-9px, 5px)',
      })),
      state('cross2', style({
        opacity: 0,
      })),
      state('cross3', style({
        transform: 'rotate(45deg) translate(-8px, -5px)'
      })),
      transition('cross1 <=> menu, cross2 <=> menu, cross3 <=> menu', [
        animate('3s ease-in-out')
      ])
    ])
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
