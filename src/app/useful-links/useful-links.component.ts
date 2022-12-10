import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { sidebarAnimation } from '../animations';
import { MenuIconComponent } from '../menu-icon/menu-icon.component';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.css'],
  animations: [sidebarAnimation()],
})
export class UsefulLinksComponent implements OnInit {

  constructor(private zone: NgZone) { }

  @ViewChild(MenuIconComponent) menu:MenuIconComponent;

  ngOnInit(): void {
    this.menuState = 'closed';
    this.show = false;
    this.toggled = false;
    this.sidebarWrapper = document.getElementById("sidebar-wrapper")!;
  }

  toggleSidebar() {
    this.menuState = this.menuState == 'closed' ? 'open' : 'closed';
    /*if (!this.toggled) {
      this.menuState = 'open';
    } else {
      this.menuState = 'closed';
    }*/
    this.toggled = !this.toggled;
    this.sidebarWrapper!.classList.toggle("toggled");
    // this.sidebarWrapper.style.setProperty("width", this.mobileMQ.matches? "100vw" : "var(--open-sidebar-width)");
  }

  animationStartEvent(event: AnimationEvent) {
    if (event.fromState != 'void') {
      this.menu.changeIcon();
    }
    console.log(event.toState);
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
  sidebarWrapper: HTMLElement;
}
