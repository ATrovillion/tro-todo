import './App.css';
import { useState } from 'react';
import { styled } from 'styled-components';
import Nav from './Components/Nav';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import CreateNewTodo from './Components/CreateNewTodo';

const PageStyles = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
`;

const initial = [];

function App() {
  const [newTodos, setNewTodos] = useState(initial);

  const clearForm = () => {
    console.log('clearForm called!');
  };

  const createTodo = (inputs) => {
    const { task, due, details } = inputs;
    setNewTodos([
      // copy existing state
      ...newTodos,
      { task, due, description: details },
    ]);

    clearForm();
  };

  return (
    <PageStyles className="App">
      <Header />
      <Nav />
      <CreateNewTodo createTodo={createTodo}/>
      <TodoList todos={newTodos} />
    </PageStyles>
  );
}

export default App;
