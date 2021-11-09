const users = ['a', 'b'] as const;

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

const result: TupleToObject<typeof users> = { a: 'a', b: 'b' };
