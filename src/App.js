import Nav from './Components/Nav';
import './App.css';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

const TodosContext = createContext({
  todo1: {
    title: "Clean house",
    due: "November 22, 2023",
    details: "house is a mess; clean it!"
  },
  todo2: {
    title: "pay bills",
    due: "September 1, 2023",
    details: "so many bills to pay; pay them!"
  }
});

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
