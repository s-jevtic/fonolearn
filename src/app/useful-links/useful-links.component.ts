import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { sidebarAnimation } from '../animations';
import { MenuIconComponent } from '../menu-icon/menu-icon.component';
import { isMobile } from '../app.component';
import { PhoneDataService } from '../phone-data.service';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.css'],
  animations: [sidebarAnimation],
})
export class UsefulLinksComponent implements OnInit {

  constructor(private zone: NgZone, private phoneDataService: PhoneDataService) { }

  @ViewChild(MenuIconComponent) menu:MenuIconComponent;

  ngOnInit(): void {
    this.menuState = 'closed';
    this.show = false;
    this.toggled = false;
    this.sidebarWrapper = document.getElementById("sidebar-wrapper")!;
  }

  toggleSidebar() {
    if (isMobile) {
      this.menuState = this.menuState == 'closed' ? 'open-full' : 'closed';
    }
    else {
      this.menuState = this.menuState == 'closed' ? 'open' : 'closed';
    }
    this.toggled = !this.toggled;
    this.sidebarWrapper!.classList.toggle("toggled");
  }

  animationStartEvent(event: AnimationEvent) {
    if (event.fromState == 'closed' || (event.toState == 'closed' && event.fromState != 'void')) {
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

  onLeftSwipe(evt: Event) {
    if (this.menuState == 'closed') {
      this.toggleSidebar();
    }
  }

  onRightSwipe(evt: Event) {
    if (this.menuState !== 'closed') {
      this.toggleSidebar();
    }
  }

  mainMenuActive(): boolean {
    return document.getElementById("sound-picker-container")? true : false; // kind of a workaround, checking if an element *inside* the main menu exists
  }

  menuState: string;
  show: boolean;
  toggled: boolean;
  sidebarWrapper: HTMLElement;
}
