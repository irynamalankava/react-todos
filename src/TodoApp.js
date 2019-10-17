import React, {useEffect} from 'react';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Footer from './Footer';
import {TodosProvider} from './contexts/todos.context';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
    
    //const initialTodos = JSON.parse(window.localStorage.getItem("todos")|| "[]");
    /*const initialTodos = [
        { id: 1, task: "Walk", completed: false},
        { id: 2, task: "Run", completed: true},
        { id: 3, task: "Play", completed: false},
        
    ];*/
    
    return (
        <Paper
            style = {{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa",

            }}
            elevation = {0}
        >
            <AppBar color='primary' position='static' style={{height: "64px"}}>
                <Toolbar>
                    <Typography color='inherit'>REACT TODOS APP</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify = "center"
                style = {{marginTop: "1.5rem"}}>
                <Grid item xs = {11} md = {8} lg = {4}>
                <TodosProvider>
                    <TodoForm />
                        <TodoList/>
                    </TodosProvider>    
                </Grid>
                <Footer/>
            </Grid>    
        </Paper>
    )
}

export default TodoApp;