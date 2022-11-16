import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IPAapp';
  
  goIPA($event: any) {
    window.location.assign('ipa');
  }
}
