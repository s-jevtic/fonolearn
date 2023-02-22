import { Injectable } from '@angular/core';
import { fromEvent, Observable, BehaviorSubject, fromEventPattern } from 'rxjs';
import { startWith, map, pluck } from 'rxjs/operators';

const mediaQuery = '(max-width: 768px)';

@Injectable({
  providedIn: 'root'
})
export class CheckMobileService {

  constructor() { }

  // return true if screen is mobile using BehaviorSubject object
  media(): Observable<boolean> {
    // create BehaviorSubject object with initial value of initial window width
    let isMobile = new BehaviorSubject<boolean>(window.innerWidth < 768);
    // subscribe to window resize event
    fromEvent(window, 'resize').subscribe(() => {
      // update value in the BehaviorSubject
      isMobile.next(window.innerWidth < 768);
    });
    // return observable from BehaviorSubject
    return isMobile.asObservable();
  }

}
