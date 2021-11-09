interface Todo {
  title: string;
  description: string;
}
// keyof T 获取 T 的所有 key
type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property

export {};
