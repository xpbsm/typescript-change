type Param<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

type FunA = (a: string) => any;


type MyParam = Param<FunA>