import './App.css';
import { styled } from 'styled-components';
import { useContext } from 'react';
import TodoContext, { TodoProvider } from './Components/TodoContext';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Todo from './Components/Todo';

const PageStyles = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
`;


function App() {
  const todos = useContext(TodoContext)
  return (
    <PageStyles className="App">
      <Header />
      <TodoProvider value={todos}>
        <Nav />
        <Todo/>
      </TodoProvider>
    </PageStyles>
  );
}

export default App;
