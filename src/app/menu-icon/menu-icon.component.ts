import { Component, OnInit } from '@angular/core';
import { menuIconAnimation } from '../animations';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.css'],
  animations: [menuIconAnimation]
})
export class MenuIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.line1State = 'menu';
    this.line2State = 'menu';
    this.line3State = 'menu';
  }

  changeIcon()
  {
    this.line1State = this.line1State == 'menu'? 'cross1' : 'menu';
    this.line2State = this.line2State == 'menu'? 'invisible' : 'menu';
    this.line3State = this.line3State == 'menu'? 'cross2' : 'menu';
  }

  line1State: string;
  line2State: string;
  line3State: string;
}
