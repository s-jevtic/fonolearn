export enum MannerOfArticulation {
    Stop,
    Nasal,
    Trill,
    TapFlap,
    Fricative,
    LateralFricative,
    Affricate,
    Approximant,
    LateralApproximant
  }

  export function mannerFromString(mannerString: string): MannerOfArticulation {
    switch(mannerString) {
      case "stop": return MannerOfArticulation.Stop;
      case "nasal": return MannerOfArticulation.Nasal;
      case "trill": return MannerOfArticulation.Trill;
      case "tap-flap": return MannerOfArticulation.TapFlap;
      case "fricative": return MannerOfArticulation.Fricative;
      case "lateral-fricative": return MannerOfArticulation.LateralFricative;
      case "affricate": return MannerOfArticulation.Affricate;
      case "approximant": return MannerOfArticulation.Approximant;
      case "lateral-approximant": return MannerOfArticulation.LateralApproximant;
      default: throw new TypeError("Manner of articulation not properly defined (" + mannerString + " not recognized)");
    }
  }