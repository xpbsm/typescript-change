type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type First<T extends any[]> = T[0];

type Last<T extends any[]> = T extends [...any[], infer P] ? P : any[];
type Last1<T extends any[]> = [any, ...T][T['length']];

type head1 = First<arr1>; // expected to be 'a'
type head2 = Last<arr2>; // expected to be 1

export {};
