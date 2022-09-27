export enum PlaceOfArticulation {
  Bilabial,
  Labiodental,
  Dental,
  Alveolar,
  PalatoAlveolar,
  AlveoloPalatal,
  Retroflex,
  Palatal,
  Velar,
  Uvular,
  Pharyngeal,
  Glottal
}

export const PlaceFromString: any = {
  "bilabial": PlaceOfArticulation.Bilabial,
  "labiodental": PlaceOfArticulation.Labiodental,
  "dental": PlaceOfArticulation.Dental,
  "alveolar": PlaceOfArticulation.Alveolar,
  "palato-alveolar": PlaceOfArticulation.PalatoAlveolar,
  "alveolo-palatal": PlaceOfArticulation.AlveoloPalatal,
  "retroflex": PlaceOfArticulation.Retroflex,
  "palatal": PlaceOfArticulation.Palatal,
  "velar": PlaceOfArticulation.Velar,
  "uvular": PlaceOfArticulation.Uvular,
  "pharyngeal": PlaceOfArticulation.Pharyngeal,
  "glottal": PlaceOfArticulation.Glottal
}