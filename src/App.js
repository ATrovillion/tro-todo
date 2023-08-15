import Nav from './Components/Nav';
import './App.css';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
