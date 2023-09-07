import useForm from '../lib/useForm';

export default function NewTodoForm({ createTodo }) {
  const { inputs, handleChange, clearForm } = useForm();

  const handleSubmit = () => {
    createTodo(inputs);
    clearForm();
  };

  return (
    <form>
      <fieldset>
        <label htmlFor="task">
          Task
          <input
            type="text"
            id="task"
            name="task"
            placeholder="Task"
            value={inputs.task}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="due">
          Due Date
          <input
            type="text"
            id="due"
            name="due"
            placeholder="Due Date"
            value={inputs.due}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="details">
          Details
          <input
            type="text"
            id="details"
            name="details"
            placeholder="Description of the Task"
            value={inputs.details}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </fieldset>
    </form>
  );
}
