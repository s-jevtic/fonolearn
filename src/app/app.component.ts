import { Component, NgZone, ViewChild } from '@angular/core';
import { UsefulLinksComponent } from './useful-links/useful-links.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
  ]
})

export class AppComponent {
  title = 'IPAapp';

  constructor(private zone: NgZone) { }

  @ViewChild(UsefulLinksComponent) sidebar : UsefulLinksComponent;
  
  ngOnInit() {
    let mobileMQ = matchMedia('(max-width: 768px)');
    isMobile = mobileMQ.matches;

    if (isMobile) {
      document.getElementById("content")!.style.setProperty("margin-left", "0");
    }
    else {
      document.getElementById("content")!.style.setProperty("margin-left", "var(--closed-sidebar-width)");
    }

    mobileMQ.addEventListener("change",
      mobileMQ => {
        this.zone.runOutsideAngular(() => {
          isMobile = mobileMQ.matches;
          this.MQChange();
        });
      }
    );
  }

  public MQChange() {
    if (isMobile) {
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

export var isMobile: boolean;
