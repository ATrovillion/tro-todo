import { styled } from 'styled-components';

const IndividualTodoStyles = styled.div`
  /* display: flex; */
  text-align: left;
  outline-style: ridge;
  outline-width: 4px;
  margin: 5px;
  h4 {
    font-size: 1.5em;
    margin-left: 2px;
    text-align: center;
  }

`

export default function IndividualTodo({ todo, markComplete }) {
  return (
    <IndividualTodoStyles>
      <span><input type="checkbox" onClick={markComplete}/><h4>{todo.task}</h4></span>
      <p>Due: {todo.due}</p>
      <p>Details: {todo.description}</p>
    </IndividualTodoStyles>
  );
}
