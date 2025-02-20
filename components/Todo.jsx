import { useState } from "react";
import List from "./List";
import Form from "./Form";

const Todo = () => {
  const [todosList, setTodosList] = useState([
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ]);

  return (
    <>
      <List todos={todosList} setTodos={setTodosList} />
      <Form todos={todosList} setTodos={setTodosList} />
    </>
  );
};

export default Todo;