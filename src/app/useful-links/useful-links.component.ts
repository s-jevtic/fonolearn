import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { sidebarAnimation } from '../animations';
import { MenuIconComponent } from '../menu-icon/menu-icon.component';
import { CheckMobileService } from '../check-mobile.service';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.css'],
  animations: [sidebarAnimation],
})
export class UsefulLinksComponent implements OnInit {

  constructor(private zone: NgZone, public checkMobileService: CheckMobileService) { }

  @ViewChild(MenuIconComponent, {static: true}) menu: MenuIconComponent;
  //static: true is needed because the component is referenced in ngOnInit (source: stackoverflow)

  isMobile: boolean;

  ngOnInit(): void {
    this.show = false;
    this.toggled = false;
    this.sidebarWrapper = document.getElementById("sidebar-wrapper")!;
    this.checkMobileService.media().subscribe((isMobileArg: boolean) => {
      this.zone.runOutsideAngular(() => {
        this.isMobile = isMobileArg;
      });
    });
    this.menuState = this.isMobile? 'closed-m' : 'closed';
  }

  toggleSidebar() {
    if (this.isMobile) {
      this.menuState = this.menuState == 'closed-m' ? 'open-m' : 'closed-m';
    }
    else {
      this.menuState = this.menuState == 'closed' ? 'open' : 'closed';
    }
    this.toggled = !this.toggled;
    this.sidebarWrapper!.classList.toggle("toggled");
  }

  animationStartEvent(event: AnimationEvent) {
    if ((event.fromState == 'closed' || (event.toState == 'closed' && event.fromState != 'void')) && this.menu) {
      this.menu.changeIcon();
    }
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
    if ((this.menuState == 'closed') || (this.menuState == 'closed-m')) {
      this.toggleSidebar();
    }
  }

  onUpSwipe(evt: Event) {
    if ((this.menuState == 'open') || (this.menuState == 'open-m')) {
      this.toggleSidebar();
    }
  }

  //mainMenuActive(): boolean {
    //return document.getElementById("sound-picker-container")? true : false; // kind of a workaround, checking if an element *inside* the main menu exists
  //}

  menuState: string;
  show: boolean;
  toggled: boolean;
  sidebarWrapper: HTMLElement;
}
