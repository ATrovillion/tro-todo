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
        task, due, description: details, isChecked: false,
      },
    ]);
  };
  return (
        <div>
            <CreateNewTodo createTodo={createTodo}/>
            <TodoList todos={todos} />
        </div>
  );
}
