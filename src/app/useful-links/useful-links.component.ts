import { Component, OnInit, Output } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { isTokenCharValid } from 'builder-util';

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
        animate('3s ease-in-out')
      ]),
    ]),
    trigger('changeIcon', [
      state('cross1', style({
        transform: 'rotate(-45deg) translate(-9px, 5px)',
      })),
      state('invisible', style({
        opacity: 0,
      })),
      state('cross2', style({
        transform: 'rotate(45deg) translate(-8px, -5px)'
      })),
      transition('cross1 <=> menu, cross2 <=> menu, invisible <=> menu', [
        animate('3s ease-in-out')
      ])
    ])
  ],
})
export class UsefulLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.menuState = 'closed';
    this.line1State = 'menu';
    this.line2State = 'menu';
    this.line3State = 'menu';
    this.show = false;
    this.toggled = false;
  }

  toggleSidebar() {
    this.menuState = this.menuState == 'closed'? 'open' : 'closed';
    this.line1State = this.line1State == 'menu'? 'cross1' : 'menu';
    this.line2State = this.line2State == 'menu'? 'invisible' : 'menu';
    this.line3State = this.line3State == 'menu'? 'cross2' : 'menu';
    this.toggled = !this.toggled;
  }

  animationStart(event: AnimationEvent) {
    if(!this.toggled) {
      this.show = false;
    }
  }

  animationDone(event: AnimationEvent) {
    if(this.toggled) {
      this.show = true;
    }
  }

  menuState: string;
  line1State: string;
  line2State: string;
  line3State: string;
  show: boolean;
  toggled: boolean;
}
