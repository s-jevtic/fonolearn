import { Phone } from './phone';
import { HeightFromString, VowelHeight } from './vowelheight';
import { BacknessFromString, VowelBackness } from './vowelbackness';
import { Voicing, VoicingFromString } from './voicing';
import { RoundednessFromString, VowelRoundedness } from './roundedness';

export class Vowel extends Phone {

    constructor(symbol: string, height: VowelHeight, backness: VowelBackness, clickable: boolean, roundedness?: VowelRoundedness, voicing?: Voicing, desc?: string) {
        super();
        this.symbol = symbol;
        if(typeof roundedness === 'undefined') {
            roundedness = VowelRoundedness.Unrounded;
        }
        this.roundedness = roundedness;
        this.height = height;
        this.backness = backness;
        if(typeof voicing === 'undefined')
        {
            voicing = Voicing.Voiced;
        }
        this.voicing = voicing;
        this.clickable = clickable;
        this.desc = "";
        switch(voicing) {
            case Voicing.Voiced: break;
            case Voicing.BreathyVoiced: this.desc += "breathy voiced "; break;
            case Voicing.CreakyVoiced: this.desc += "creaky voiced "; break;
            case Voicing.Voiceless: this.desc += "voiceless "; break;
            default: this.desc += "(unknown voicing) ";
        }
        switch(roundedness) {
            case VowelRoundedness.RoundedUnspecified: this.desc += "rounded "; break
            case VowelRoundedness.Compressed: this.desc += "rounded (compressed) "; break;
            case VowelRoundedness.Protruded: this.desc += "rounded (protruded) "; break;
            case VowelRoundedness.Unrounded: this.desc += "unrounded "; break;
            default: this.desc += "(unknown roundedness) ";
        }
        switch(height) {
            case VowelHeight.Close: this.desc += "close "; break;
            case VowelHeight.NearClose: this.desc += "near-close "; break;
            case VowelHeight.CloseMid: this.desc += "close-mid "; break;
            case VowelHeight.Mid: this.desc += "mid "; break;
            case VowelHeight.OpenMid: this.desc += "open-mid "; break;
            case VowelHeight.NearOpen: this.desc += "near-open "; break;
            case VowelHeight.Open: this.desc += "open "; break;
            default: this.desc += "(unknown height) ";
        }
        switch(backness) {
            case VowelBackness.Back: this.desc += "back "; break;
            case VowelBackness.Central: this.desc += "central "; break;
            case VowelBackness.Front: this.desc += "front "; break;
            default: this.desc += "(unknown backness) ";
        }
        this.desc += "vowel";
        if(typeof(desc) !== 'undefined') {
            this.desc = desc;
        }
    }

    roundedness: VowelRoundedness;
    height: VowelHeight;
    backness: VowelBackness;
    voicing: Voicing;

    static NullVowel = new Vowel("", -1, -1, false);

    static fromObject(data: any): Vowel {
        let symbol = data.symbol;
        let voicing = VoicingFromString[data.voicing];
        let height = HeightFromString[data.height];
        let backness = BacknessFromString[data.backness];
        let roundedness = RoundednessFromString[data.roundedness];
        let clickable = data.clickable;
        let p;
        if (data.roundedness) {
            if (data.voicing) {
                if (data.desc) {
                    p = new Vowel(symbol, height, backness, clickable, roundedness, voicing, data.desc);
                }
                else {
                    p = new Vowel(symbol, height, backness, clickable, roundedness, voicing);
                }
            }
            else {
                p = new Vowel(symbol, height, backness, clickable, roundedness);
            }
        }
        else {
            p = new Vowel(symbol, height, backness, clickable);
        }
        if (data.alias) {
          p.alias = data.alias;
        }
        return p;
      }
}