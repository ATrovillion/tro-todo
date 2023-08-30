// import { useState } from 'react';
import { styled } from 'styled-components';

const TodoListStyles = styled.div`
  background-color: green;
  text-align: left;
  li {
    list-style-type: none;
  }
`;

export default function TodoList({ todos }) {
  return (
    <TodoListStyles>
      {
      todos.map((todo, index) => (
        <ul key={index}>
          <li>
            <input type="checkbox" />
            <em>{todo.task}</em>
          </li>
          <ul>
            <li>Due date: {todo.due}</li>
            <li>Details: {todo.description}</li>
          </ul>
        </ul>
      ))}
    </TodoListStyles>
  );
}
