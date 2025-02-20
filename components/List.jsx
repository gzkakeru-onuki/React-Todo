const List = ({ todos, setTodos }) => {
  const handleComplete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const todoList = todos.map((todo) => {
    return (
      <div key={todo.id}>
        <button onClick={() => handleComplete(todo.id)}>完了</button>
        <span>{todo.content}</span>
      </div>
    );
  });

  return (
    <>
      {todoList}
    </>
  );
}

export default List;