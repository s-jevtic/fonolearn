import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.css']
})
export class UsefulLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.toggled = false;
  }

  toggleSidebar() {
    (document.getElementById("menu-icon") as HTMLElement).classList.toggle("toggle");
    if(this.toggled)
    {
      (document.getElementById("links-menu") as HTMLElement).classList.remove("toggle");
      this.toggled = false;
    }
    else
    {
      this.toggled = true;
      (document.getElementById("links-menu") as HTMLElement).classList.add("toggle");
    }
    console.log((document.getElementById("menu-icon") as HTMLElement).classList + "\n" + (document.getElementById("links-menu") as HTMLElement).classList + "\n" + this.toggled);
  }

  toggled: boolean;
}
