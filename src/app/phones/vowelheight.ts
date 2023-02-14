export enum VowelHeight {
    Close,
    NearClose,
    CloseMid,
    Mid,
    OpenMid,
    NearOpen,
    Open
}

export const HeightFromString: any = {
    "close": VowelHeight.Close,
    "near-close": VowelHeight.NearClose,
    "close-mid": VowelHeight.CloseMid,
    "mid": VowelHeight.Mid,
    "open-mid": VowelHeight.OpenMid,
    "near-open": VowelHeight.NearOpen,
    "open": VowelHeight.Open
}

export const UnknownHeightString = `:unknown vowel height:(unknown height)`;
