import React from 'react';
import {useDispatch} from 'react-redux';
import {cancelEdit, completedTodo, onEditAdd, onEditChange, onTodoDelete, onTodoEdit, setEdit} from '../redux/actions';
import { Button, Checkbox, TextField} from '@mui/material';
import {useTypedSelector} from '../hooks/useTypedSelector';

interface Props{
    todo: any
}

const TodoList = (props: Props) => {

    const editText = useTypedSelector((state):string => state.todo.editText)
    const dispatch = useDispatch()

    return(
        (!props.todo.isEdit) ?
        <div key={props.todo.id}
             style={{
                 borderBottom:'1px solid grey',
                 margin:10,
                 display:'flex',
                 justifyContent:'flex-start',
                 alignItems:'center',

             }}
        >
            <Checkbox/>
            <div>{props.todo.text}</div>
            <div>
                <Button variant="outlined" size="small"
                        style={{margin:15}}
                        onClick={()=>{
                            dispatch(setEdit(props.todo.id))
                            dispatch(onEditChange(props.todo.text))
                        }}
                >
                    Edit
                </Button>
            </div>
            <div>
                <Button variant="outlined" size="small"
                        style={{margin:15}}
                        onClick={()=> {
                            dispatch(onTodoDelete(props.todo.id))
                        }}
                >
                    Delete
                </Button>
            </div>
        </div>

        :

        <div key={props.todo.id}
             style={{
                 borderBottom:'1px solid grey',
                 margin:10,
                 display:'flex',
                 justifyContent:'flex-start',
                 alignItems:'center',

             }}
        >
            <Checkbox
            onClick={()=>dispatch(completedTodo(props.todo.id))}
            checked={props.todo.isCompleted}
            />
            <div>
                <TextField
                    id="standard-textarea111"
                    multiline
                    variant="standard"
                    value={editText}
                    onChange={(e)=>
                    {dispatch(onEditChange(e.target.value))}}
                    onKeyDown={(ev) => {
                        if (ev.key === 'Enter') {
                            dispatch(onEditAdd(editText))
                        }
                        if (ev.key==='Escape'){
                            dispatch(cancelEdit(props.todo.id))
                        }
                    }
                    }
                />
            </div>
            <div>
                <Button variant="outlined" size="small"
                        style={{margin:15}}
                        onClick={()=>{
                            dispatch(onTodoEdit(props.todo.id))
                        }}
                >
                    Edit
                </Button>
            </div>
            <div>
                <Button variant="outlined" size="small"
                        style={{margin:15}}
                        onClick={()=> {
                            dispatch(onTodoDelete(props.todo.id))
                        }}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
};

export default TodoList;