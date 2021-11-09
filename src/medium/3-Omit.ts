//https://stackoverflow.com/questions/56916532/difference-b-w-only-exclude-and-omit-pick-exclude-typescript
// type ExcludeD<T, U> = T extends U ? T : never;
type ExcludeD<T, U> = T extends U ? never : T;

interface Person {
  name: string;
  age: number;
  size: string;
}
// Exclude 主要是联合类型的排除
type ExcludeA = ExcludeD<keyof Person, 'age'>;

// Pick 针对的对象 接口， 元组 ExcludeD 返回联合类型 pick 利用返回的结果
type Omit<T, U> = Pick<T, ExcludeD<keyof T, U>>;

type OmitA = Omit<Person, 'name'>;

export {};
