import { useState } from 'react';

export default function useForm(initial = {
  task: '',
  due: '',
  details: '',
}) {
  // create state object for inputs
  const [inputs, setInputs] = useState(initial);

  // {
  //     task: 'task name',
  //     due: 'due date',
  //     details: 'description of the task'
  // }

  function handleChange(e) {
    const { value, name } = e.target;
    setInputs({
      // copy existing state
      ...inputs,
      [name]: value,
    });
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
  };
}
