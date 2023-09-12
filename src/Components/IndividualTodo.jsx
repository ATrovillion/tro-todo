import { styled } from 'styled-components';

const IndividualTodoStyles = styled.div`
  /* display: flex; */
  width: 250px;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin: 5px;
  word-break: keep-all;
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
