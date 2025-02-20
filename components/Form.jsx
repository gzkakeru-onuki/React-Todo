import { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [inputVal, setInputVal] = useState("");
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), content: inputVal };
    setTodos([...todos, newTodo]);
    setInputVal("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="TODOを入力" value={inputVal} />
        <button type="submit">追加</button>
      </form>
    </div>
  );
};

export default Form;
