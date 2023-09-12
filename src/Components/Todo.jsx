import { useState, useEffect} from 'react';
import CreateNewTodo from './CreateNewTodo';
import TodoList from './TodoList';

export default function Todo() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(savedTodos);
    return parsedTodos || [];
  });

  useEffect(() => {localStorage.setItem('todos', JSON.stringify(todos))}, [todos]);
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

  const markComplete = (index) => {
    todos.splice(index, 1);
    const newTodos = todos.map((todo) => ({ ...todo, isComplete: false }));

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
