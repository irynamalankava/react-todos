//todos
//all the methods to work with todos
import React, {createContext} from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
    {id:1, task: "Shopping", completed: false},
    {id:2, task: "Walk the dog", completed: true},
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
    //const {todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(defaultTodos);
    //is the same as below
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);
    //cause in Provider we need to pass as value 1 item - an object
    return (
        <TodosContext.Provider value = {todos}>
            <DispatchContext.Provider value = {dispatch}>
                {props.children}
            </DispatchContext.Provider>    
        </TodosContext.Provider>
    )
}
