type ReturnTypeD<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer P
  ? P
  : never;

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = ReturnTypeD<typeof fn>;
