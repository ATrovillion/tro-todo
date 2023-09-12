import './App.css';
import { styled } from 'styled-components';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Todo from './Components/Todo';

const PageStyles = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
`;


function App() {
  return (
    <PageStyles className="App">
      <Header />
      <Nav />
      <Todo/>
    </PageStyles>
  );
}

export default App;
