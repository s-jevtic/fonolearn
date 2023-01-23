import { Component, OnInit, NgZone } from '@angular/core';
import { menuIconAnimation } from '../animations';
import { CheckMobileService } from '../check-mobile.service';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.css'],
  animations: [menuIconAnimation]
})
export class MenuIconComponent implements OnInit {
  line1State: string;
  line2State: string;
  line3State: string;
  isMobile: boolean;
  arrowState: string;

  constructor(private zone: NgZone, public checkMobileService: CheckMobileService) { }

  ngOnInit(): void {
    this.line1State = 'menu';
    this.line2State = 'menu';
    this.line3State = 'menu';
    this.checkMobileService.media().subscribe((isMobileArg: boolean) => {
      this.zone.runOutsideAngular(() => {
        this.isMobile = isMobileArg;
      });
    });
    this.arrowState = this.isMobile? 'downwards' : 'upwards';
  }

  changeIcon()
  {
    this.line1State = this.line1State == 'menu' ? 'cross1' : 'menu';
    this.line2State = this.line2State == 'menu' ? 'invisible' : 'menu';
    this.line3State = this.line3State == 'menu' ? 'cross2' : 'menu';
    this.arrowState = this.arrowState == 'downwards'? 'upwards' : 'downwards';
    console.log("changed icon");

  }
}
