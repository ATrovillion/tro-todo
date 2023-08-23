import { styled } from "styled-components";
import {useContext, useState} from 'react';
import { TodosContext } from "../App";

const TodoListStyles = styled.div`
    background-color: green;
`

export default function TodoList() {
    const todos = useContext(TodosContext)
    return (
        <TodoListStyles>
            <p>Hi! I'm the todo list component</p>
        </TodoListStyles>
    )
}