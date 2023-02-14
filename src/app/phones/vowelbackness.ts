export enum VowelBackness {
    Front,
    Central,
    Back
}

export const BacknessFromString: any = {
    "front": VowelBackness.Front,
    "central": VowelBackness.Central,
    "back": VowelBackness.Back
}

export const UnknownBacknessString = $localize `:unknown vowel backness:(unknown backness)`;
