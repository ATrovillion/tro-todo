import { createContext, useContext } from 'react';

const TodoContext = createContext(null);

export const TodoProvider = function ({children}) {
    const 
    return (
        <TodoContext.Provider value={todos}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;