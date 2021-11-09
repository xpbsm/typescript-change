interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
// type MyReadonly2<T, K> = K extends keyof T ? K : never;
type MyReadonly2<T, K extends keyof T> = {
  readonly [P in K]: T[P];
} & T

type read = MyReadonly2<Todo, 'title' | 'description'>;

const todo: read = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
todo.completed = true; // OK
