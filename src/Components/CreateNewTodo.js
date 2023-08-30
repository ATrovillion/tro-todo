import NewTodoForm from './NewTodoForm';

export default function CreateNewTodo({ createTodo }) {
  return (
    <div>
      <NewTodoForm createTodo={createTodo}/>
    </div>
  );
}
