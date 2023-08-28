import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import CreateNewTodo from './Components/CreateNewTodo';

const todos = [
  {
    title: 'clean my room',
    due: 'November 22, 2024',
    description: 'room is dirty; clean it!',
  },
  {
    title: 'pay taxes',
    due: 'April 15, 2024',
    description: 'Government needs my money. Pay taxes!',
  },
  {
    title: 'have doctor look at embarrassing rash',
    due: 'August 24, 2023',
    description: 'Rash is gross! Get it looked at!',
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <CreateNewTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
