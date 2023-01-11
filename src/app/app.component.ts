import { Component, NgZone, ViewChild } from '@angular/core';
import { UsefulLinksComponent } from './useful-links/useful-links.component';
import { CheckMobileService } from './check-mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
  ]
})

export class AppComponent {
  title = 'fonolearn';

  constructor(private zone: NgZone, public checkMobileService: CheckMobileService) { }

  @ViewChild(UsefulLinksComponent) sidebar : UsefulLinksComponent;

  isMobile$ = this.checkMobileService.media();

  isMobile: boolean;
  
  ngOnInit() {
    let mobileMQ = matchMedia('(max-width: 768px)');
    this.isMobile = mobileMQ.matches;

    if (this.isMobile) {
      document.getElementById("content")!.style.setProperty("margin-left", "0");
    }
    else {
      document.getElementById("content")!.style.setProperty("margin-left", "var(--closed-sidebar-width)");
    }

    // subscribe to the behavior subject
    this.checkMobileService.media().subscribe((isMobileArg: boolean) => {
      this.zone.runOutsideAngular(() => {
        this.isMobile = isMobileArg;
        this.MQChange();
      });
    });
  }

  public MQChange() {
    if (this.isMobile) {
      document.getElementById("content")!.style.setProperty("margin-left", "0");
    }
    else {
      document.getElementById("content")!.style.setProperty("margin-left", "var(--closed-sidebar-width)");
    }
    if (this.sidebar.menuState != 'closed') {
      this.sidebar.menuState = this.sidebar.menuState == 'open'? 'open-full' : 'open';
    }
  }

  goIPA($event: any) {
    window.location.assign('ipa');
  }
}
