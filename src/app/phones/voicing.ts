export enum Voicing {
  Voiceless,
  Voiced,
  BreathyVoiced,
  CreakyVoiced
}

export function voicingFromString(voicingString: string): Voicing {
  switch(voicingString) {
    case "voiceless": return Voicing.Voiceless;
    case "voiced": return Voicing.Voiced;
    case "breathy-voiced": return Voicing.BreathyVoiced;
    case "creaky-voiced": return Voicing.CreakyVoiced;
    default: throw new TypeError("Voicing not properly defined (" + voicingString + " not recognized)");
  }
}