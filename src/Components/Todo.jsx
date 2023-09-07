import { useState } from 'react';
import CreateNewTodo from './CreateNewTodo';
import TodoList from './TodoList';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const createTodo = (inputs) => {
    const { task, due, details } = inputs;
    setTodos([
      // copy existing state
      ...todos,
      {
        task, due, description: details, isComplete: false,
      },
    ]);
  };
  const markComplete = (e, index) => {
    e.target.checked = false;
    todos.splice(index, 1);
    const newTodos = todos.map((todo) => ({ isComplete: false, ...todo }));

    setTodos([
      ...newTodos,
    ]);
  };
  return (
    <div>
      <CreateNewTodo createTodo={createTodo} />
      <TodoList todos={todos} markComplete={markComplete} />
    </div>
  );
}
