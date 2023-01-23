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

  @ViewChild(UsefulLinksComponent, {static: true}) sidebar : UsefulLinksComponent;
  //static: true is needed because the component is referenced in ngOnInit (source: stackoverflow)

  isMobile$ = this.checkMobileService.media();

  isMobile: boolean;

  ngOnInit() {
    let mobileMQ = matchMedia('(max-width: 768px)');
    this.isMobile = mobileMQ.matches;

    // subscribe to the behavior subject
    this.checkMobileService.media().subscribe((isMobileArg: boolean) => {
      this.zone.runOutsideAngular(() => {
        this.isMobile = isMobileArg;
      });
    });
  }

  goIPA($event: any) {
    window.location.assign('ipa');
  }
}
