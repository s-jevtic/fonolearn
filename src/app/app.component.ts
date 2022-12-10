import { Component, NgZone } from '@angular/core';

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
  
  ngOnInit() {
    let mobileMQ = matchMedia('(max-width: 768px)');

    mobileMQ.addEventListener("change",
      mobileMQ => {
        this.zone.runOutsideAngular(() => {
          if (mobileMQ.matches) {
            document.getElementById("content")!.style.setProperty("margin-left", "0");
          }
          else {
            document.getElementById("content")!.style.setProperty("margin-left", "var(--closed-sidebar-width)");
          }
          isMobile = mobileMQ.matches;
          console.log(isMobile);
        });
      }
    );
  }

  goIPA($event: any) {
    window.location.assign('ipa');
  }
}

export var isMobile: boolean;
