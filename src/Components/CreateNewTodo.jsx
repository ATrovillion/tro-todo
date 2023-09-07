import NewTodoForm from './NewTodoForm';

export default function CreateNewTodo({ createTodo, clearForm }) {
  return (
    <div>
      <NewTodoForm createTodo={createTodo} clearForm={clearForm} />
    </div>
  );
}
