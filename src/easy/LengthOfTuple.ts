type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
];
type Length<T extends any[]> = T['length'];

type Last<T extends any[]> = [any, ...T][T['length']];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Last<spaceX>; // expected 5
