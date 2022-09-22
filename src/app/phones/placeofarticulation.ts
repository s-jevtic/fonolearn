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

export function placeFromString(placeString: string): PlaceOfArticulation {
  switch(placeString) {
    case "bilabial": return PlaceOfArticulation.Bilabial;
    case "labiodental": return PlaceOfArticulation.Labiodental;
    case "dental": return PlaceOfArticulation.Dental;
    case "alveolar": return PlaceOfArticulation.Alveolar;
    case "palato-alveolar": return PlaceOfArticulation.PalatoAlveolar;
    case "alveolo-palatal": return PlaceOfArticulation.AlveoloPalatal;
    case "retroflex": return PlaceOfArticulation.Retroflex;
    case "palatal": return PlaceOfArticulation.Palatal;
    case "velar": return PlaceOfArticulation.Velar;
    case "uvular": return PlaceOfArticulation.Uvular;
    case "pharyngeal": return PlaceOfArticulation.Pharyngeal;
    case "glottal": return PlaceOfArticulation.Glottal;
    default: throw new TypeError("Place of articulation not properly defined (" + placeString + " not recognized)");
  }
}