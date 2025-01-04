import { useState } from "react";

interface TodoList {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoList[]>([]);

  const createTodo = (task: string) => {
    const newTodo: TodoList = {
      id: todos.length + 1,
      task,
      completed: false,
    };

    setTodos((prevtodo) => [...prevtodo, newTodo]);
  };

  return (
    <div>
      <button onClick={() => createTodo("new task")}>add</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.task}, {todo.completed ? "(Completed)" : ""}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
