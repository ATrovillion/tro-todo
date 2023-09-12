import { styled } from 'styled-components';
import IndividualTodo from './IndividualTodo';

const TodoListStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: auto;
  row-gap: 30px;
  justify-content: space-evenly;
`;

export default function TodoList(props) {
  const { todos, markComplete } = props;
  return (
    <TodoListStyles>
      {todos.map((todo, index) => {
        const uniqueKey = `td${index}`;
        return <IndividualTodo key={uniqueKey} todo={todo} markComplete={() => markComplete(index)} />;
      })}
    </TodoListStyles>
  );
}
