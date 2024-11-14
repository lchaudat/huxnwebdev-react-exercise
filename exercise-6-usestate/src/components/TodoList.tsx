import { ChangeEvent, FormEvent, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    "do the laundry",
    "wash dishes",
    "learn react",
  ]);

  const [element, setElement] = useState("");

  const handleSubmit = (elem: FormEvent) => {
    elem.preventDefault();
    // console.log(document.getElementById("todoinput")?.nodeValue);

    setTodos([...todos, element]);
    setElement("");
  };

  const handleChange = (elem: ChangeEvent<HTMLInputElement>) => {
    setElement(elem.target.value);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return <li key={Math.random()}>{todo}</li>;
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={element} onChange={handleChange}></input>
        <button type="submit">add element</button>
      </form>
    </>
  );
};

export default TodoList;
