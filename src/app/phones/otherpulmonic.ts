import { Phone } from './phone';
import { MannerOfArticulation } from './mannerofarticulation';
import { Voicing } from './voicing';

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
}