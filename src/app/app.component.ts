import { Component } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
  ]
})
export class AppComponent {
  title = 'IPAapp';
  
  goIPA($event: any) {
    window.location.assign('ipa');
  }
}
