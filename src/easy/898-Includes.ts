type Includes<T extends any[], U> = U extends T[number] ? 'true' : 'false';

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Doi'], 'Karsw'>; // expected to be `false`
