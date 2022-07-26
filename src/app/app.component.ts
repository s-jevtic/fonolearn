import { Component } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IPAapp';
  // mainMenu = new MainMenuComponent();
  
  goIPA($event: any) {
    window.location.assign('ipa');
  }
}
