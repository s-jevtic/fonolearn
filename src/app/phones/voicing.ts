export enum Voicing {
  Voiceless,
  Voiced,
  BreathyVoiced,
  CreakyVoiced
}

export const VoicingFromString: any = {
  "voiceless": Voicing.Voiceless,
  "voiced": Voicing.Voiced,
  "breathy-voiced": Voicing.BreathyVoiced,
  "creaky-voiced": Voicing.CreakyVoiced
}