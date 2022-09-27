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

export const MannerFromString: any = {
  "stop": MannerOfArticulation.Stop,
  "nasal": MannerOfArticulation.Nasal,
  "trill": MannerOfArticulation.Trill,
  "tap-flap": MannerOfArticulation.TapFlap,
  "fricative": MannerOfArticulation.Fricative,
  "lateral-fricative": MannerOfArticulation.LateralFricative,
  "affricate": MannerOfArticulation.Affricate,
  "approximant": MannerOfArticulation.Approximant,
  "lateral-approximant": MannerOfArticulation.LateralApproximant
}