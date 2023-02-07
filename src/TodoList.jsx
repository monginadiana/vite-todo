export default function TodoList({todos, remove}) {
  console.log(todos)
  return (
    <>
      {todos.length > 0 ? (
        
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li key={index}>{todo} </li>
              <button
                type="delete-button"
                onClick={() => {
                  remove(todo);
                }}
              >
                delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>no todo list</p>
        </div>
      )}
    </>
  );
}
