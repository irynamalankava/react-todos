import React, {useContext, memo} from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {DispatchContext} from './contexts/todos.context';
import { identifier } from '@babel/types';


function Todo({task, completed, id}) {
    const [isEditing, toggleEditing] = useToggleState(false);
    const dispatch = useContext(DispatchContext);
    return (
        <ListItem style = {{height: "64px"}}>
            {isEditing ? (<EditTodoForm id = {id} task = {task} toggleEditForm = {toggleEditing}/>) :
                <>
                    <Checkbox checked = {completed} onClick = {() => dispatch({type: "TOGGLE", id: id})}/>
                    <ListItemText>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label = "Delete" onClick = {()=> dispatch({type: "REMOVE", id: id })} >
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton aria-label = "Edit" onClick = {toggleEditing}>
                            <EditIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </>}
        </ListItem> 
    );
}

export default memo(Todo);