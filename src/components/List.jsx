import ToDoItem from './ToDoItem';

const List = ({ todos, deleteToDo, toggleComplete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          index={index}
          todo={todo}
          deleteToDo={deleteToDo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default List;
