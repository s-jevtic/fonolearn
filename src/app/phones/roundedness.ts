export enum VowelRoundedness {
    Unrounded,
    Compressed,
    Protruded,
    RoundedUnspecified
}

export const RoundednessFromString: any = {
    "unrounded": VowelRoundedness.Unrounded,
    "compressed": VowelRoundedness.Compressed,
    "protruded": VowelRoundedness.Protruded,
    "rounded-unspecified": VowelRoundedness.RoundedUnspecified,
    "rounded": VowelRoundedness.RoundedUnspecified // this one should never "happen", but just in case
}

export const UnknownRoundednessString = $localize `(unknown roundedness)`
