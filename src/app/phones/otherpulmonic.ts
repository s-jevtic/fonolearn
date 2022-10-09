import { Phone } from './phone';
import { MannerFromString, MannerOfArticulation } from './mannerofarticulation';
import { Voicing, VoicingFromString } from './voicing';

export class OtherPulmonic extends Phone {
    constructor(symbol: string, voicing: Voicing, manner: MannerOfArticulation, clickable: boolean, desc: string) {
        super();
        this.symbol = symbol;
        this.manner = manner;
        this.voicing = voicing;
        this.desc = desc;
        this.clickable = clickable;
    }
    manner: MannerOfArticulation;
    voicing: Voicing;

    static fromObject(data: any): OtherPulmonic {
        let symbol = data.symbol;
        let voicing = VoicingFromString[data.voicing];
        let manner = MannerFromString[data.manner];
        let clickable = data.clickable;
        let desc = data.desc;
        let p = new OtherPulmonic(symbol, voicing, manner, clickable, desc);
        if (data.alias) {
            p.alias = data.alias
        }
        return p;
    }
}