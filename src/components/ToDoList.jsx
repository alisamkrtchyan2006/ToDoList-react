import { useState } from 'react';
import AddToDo from './AddToDo';
import List from './List';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = (newTodo) => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
    }
  };

  const deleteToDo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <AddToDo addToDo={addToDo} />
      <List todos={todos} deleteToDo={deleteToDo} toggleComplete={toggleComplete} />
    </div>
  );
};

export default ToDoList;
