type ExcludeD<T, U> = T extends U ? never : T;

type Methods = 'GET' | 'POST' | 'DELETE';
// 对象默认参数类型
type RecordD<U extends string | number | symbol, T> = { [P in U]: T };

type RecordMethods = RecordD<Methods, any>;

// 可选参数
type PartialD<T> = { [P in keyof T]?: T[P] };

//type RequiredD<T>
interface PartialA {
  name: string;
  age: number;
  firstName: string;
}

type PartialDVal = PartialD<PartialA>;

type OmitD<T, K extends number | string | symbol> = Pick<
  T,
  Exclude<keyof T, K>
>;

type ExcludeA = Exclude<PartialA, 'name'>;

type OmitA = OmitD<PartialA, 'name1' | 'age'>;

type IED = '1' | '2' | '3';
type IEE = '1' | '2' | '1232';

type dd = Exclude<IED, IEE>;


