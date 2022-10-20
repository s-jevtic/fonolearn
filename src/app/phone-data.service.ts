import { Injectable } from '@angular/core';
import { Click } from './phones/click';
import { consonantList } from './phones/consonants';
import { Ejective } from './phones/ejective';
import { Implosive } from './phones/implosive';
import { OtherPulmonic } from './phones/otherpulmonic';
import { Phone } from './phones/phone';
import { PulmonicConsonant } from './phones/pulmonicconsonant';

@Injectable({
  providedIn: 'root'
})
export class PhoneDataService {

  constructor() {

    this.phoneChecked = new Map<Phone, boolean>;

    this.pulmonicConsonants = [];
    for(let data of consonantList.pulmonicConsonants) {
      this.pulmonicConsonants.push(PulmonicConsonant.fromObject(data));
    }

    this.otherPulmonic = [];
    for(let data of consonantList.otherPulmonic) {
      this.otherPulmonic.push(OtherPulmonic.fromObject(data));
    }
    
    this.implosives = [];
    for(let data of consonantList.implosives) {
      this.implosives.push(Implosive.fromObject(data));
    }

    this.ejectives = [];
    for(let data of consonantList.ejectives) {
      this.ejectives.push(Ejective.fromObject(data));
    }

    this.clicks = [];
    for(let data of consonantList.clicks) {
      this.clicks.push(Click.fromObject(data));
    }
  }

  pulmonicConsonants: PulmonicConsonant[];
  otherPulmonic: OtherPulmonic[];
  implosives: Implosive[];
  ejectives: Ejective[];
  clicks: Click[];

  phoneChecked: Map<Phone, boolean>;
}
