import { styled } from 'styled-components';

const TodoListStyles = styled.div`
  background-color: green;
  text-align: left;
`;

export default function TodoList({ todos }) {
  return (
    <TodoListStyles>
      {todos.map((todo, index) => (
        <ul key={index}>
          <li>
            <em>{todo.title}</em>
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
