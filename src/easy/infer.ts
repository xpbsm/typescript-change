type ParamsType<T> = T extends (...args: infer P) => any ? P : never;

type ReturnTypes<T> = T extends (...args: any[]) => infer P ? P : never;

type Fun = (a: number, b: string) => any;


const pType: ParamsType<Fun> = [1, '2'];


const returnTypes: ReturnTypes<Fun> = 1