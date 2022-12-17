// 通过interface 定义了 Todo
interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

// 挑选出 title 和 completed
type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: '云层上的光',
    completed: false,
}

