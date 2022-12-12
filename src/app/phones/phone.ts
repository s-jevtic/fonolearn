export class Phone {
    constructor() {
        this.symbol = "";
        this.desc = "(unknown)"
        this.clickable = false; // this means whether the pronunciation is available
    }
    symbol: string;
    desc: string;
    filename: string;
    clickable: boolean;
    alias: string;
}