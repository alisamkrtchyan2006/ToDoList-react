import { useState } from 'react';

const AddToDo = ({ addToDo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button className="add" type="submit">Add</button>
    </form>
  );
};

export default AddToDo;
