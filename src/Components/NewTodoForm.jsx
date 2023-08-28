import useForm from '../lib/useForm';

export default function NewTodoForm() {
  const { inputs, handleChange } = useForm();
  function submitHandler(e) {
    e.preventDefault();
    console.log(inputs);
  }
  return (
    <form onSubmit={submitHandler}>
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
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}