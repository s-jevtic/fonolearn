export enum MannerOfArticulation {
    Stop,
    Nasal,
    Trill,
    TapFlap,
    Fricative,
    LateralFricative,
    Affricate,
    LateralAffricate,
    Approximant,
    LateralApproximant
  }

export const MannerFromString: any = {
  "stop": MannerOfArticulation.Stop,
  "nasal": MannerOfArticulation.Nasal,
  "trill": MannerOfArticulation.Trill,
  "tap-flap": MannerOfArticulation.TapFlap,
  "fricative": MannerOfArticulation.Fricative,
  "lateral-fricative": MannerOfArticulation.LateralFricative,
  "lateral-affricate": MannerOfArticulation.LateralAffricate,
  "affricate": MannerOfArticulation.Affricate,
  "approximant": MannerOfArticulation.Approximant,
  "lateral-approximant": MannerOfArticulation.LateralApproximant
}

export const UnknownMannerString = $localize `(unknown manner of articulation)`;
