import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { sidebarAnimation, menuIconAnimation } from '../animations';
import { CheckMobileService } from '../check-mobile.service';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.css'],
  animations: [sidebarAnimation, menuIconAnimation],
})
export class UsefulLinksComponent implements OnInit {
  constructor(private zone: NgZone, public checkMobileService: CheckMobileService) { }

  isMobile: boolean;

  ngOnInit(): void {
    this.show = false;
    this.toggled = false;
    this.sidebarWrapper = document.getElementById("sidebar-wrapper")!;
    this.checkMobileService.media().subscribe((isMobileArg: boolean) => {
      this.zone.runOutsideAngular(() => {
        this.isMobile = isMobileArg;
        this.MQChange();
      });
    });
    this.menuState = 'closed';
    this.arrowState = this.isMobile? 'downwards' : 'upwards';
  }

  toggleSidebar() {
    this.menuState = this.menuState == 'closed' ? 'open' : 'closed';
    this.arrowState = this.arrowState == 'upwards' ? 'downwards' : 'upwards';
    this.toggled = !this.toggled;
    this.sidebarWrapper!.classList.toggle("toggled");
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

  onDownSwipe(evt: Event) {
    if (((this.menuState == 'closed') && this.isMobile) || ((this.menuState == 'open') && !this.isMobile)) {
      this.toggleSidebar();
    }
  }

  onUpSwipe(evt: Event) {
    if (((this.menuState == 'closed') && !this.isMobile) || ((this.menuState == 'open') && this.isMobile)) {
      this.toggleSidebar();
    }
  }

  private MQChange() {
    //this.MQChanging = true;
    this.arrowState = this.arrowState == 'upwards' ? 'downwards' : 'upwards';
    //this.MQChanging = false;
  }

  MQChanging: boolean;
  arrowState: string;
  menuState: string;
  show: boolean;
  toggled: boolean;
  sidebarWrapper: HTMLElement;
}
