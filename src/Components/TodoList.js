import { styled } from "styled-components";

const TodoListStyles = styled.div`
    background-color: green;
`

export default function TodoList() {
    return (
        <TodoListStyles>
            <p>Hi! I'm the todo list component</p>
        </TodoListStyles>
    )
}