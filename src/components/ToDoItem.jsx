const ToDoItem = ({ todo, index, deleteToDo, toggleComplete }) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <p>{todo.text}</p>
      <button 
        onClick={() => toggleComplete(index)}
        className={todo.completed ? 'cancel-button' : 'complete-button'}>
        {todo.completed ? 'Cancel' : 'Complete'}
      </button>
      <button className="delete" onClick={() => deleteToDo(index)}>Delete</button>
    </li>
  );
};

export default ToDoItem;
