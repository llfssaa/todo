import React from 'react';
import {useDispatch} from 'react-redux';
import {cancelEdit, completedTodo, onEditAdd, onEditChange, onTodoDelete, onTodoEdit, setEdit} from '../redux/actions';
import { Button, Checkbox, TextField} from '@mui/material';
import {useTypedSelector} from '../hooks/useTypedSelector';


interface Props{
    todo: any
}

const TodoList = ({todo}: Props) => {

    const editText = useTypedSelector((state):string => state.todo.editText)
    const dispatch = useDispatch()

    return(
        (!todo.isEdit) ?
        <div key={todo.id}
             style={{
                 borderBottom:'1px solid grey',
                 margin:10,
                 display:'flex',
                 justifyContent:'space-between',
                 alignItems:'center',
                 fontSize: 'large'

             }}
        >
            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
                <Checkbox
                    onClick={()=>dispatch(completedTodo(todo.id))}
                    color={(todo.isCompleted) ? 'success' : 'primary'}

                />
                <div style={{textDecoration:(todo.isCompleted) ? 'line-through' : 'none',
                    color:(todo.isComplete) ? '#2E7D32' : '#282c34',
                    textAlign:'start',
                    maxWidth:'max-content'}}
                     onClick={()=>{
                         dispatch(setEdit(todo.id))
                         dispatch(onEditChange(todo.text))}}
                >
                    {todo.text}
                </div>
            </div>


                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button variant="outlined" size="small"
                            style={{margin: 15}}
                            onClick={() => {
                                dispatch(setEdit(todo.id))
                                dispatch(onEditChange(todo.text))
                            }}
                            disabled={todo.isComplete}
                    >
                        Edit
                    </Button>


                    <Button variant="outlined" size="small"
                            style={{margin:15}}
                            onClick={()=> {
                                dispatch(onTodoDelete(todo.id))
                            }}
                            color={(todo.isComplete) ? 'success' : 'primary'}
                    >
                        Delete
                    </Button>
                </div>



        </div>

        :

        <div key={todo.id}
             style={{
                 borderBottom:'1px solid grey',
                 margin:10,
                 display:'flex',
                 justifyContent:'space-between',
                 alignItems:'center',

             }}
        >
            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
            <Checkbox
                onClick={()=>dispatch(completedTodo(todo.id))}
                color={(todo.isComplete) ? 'error' : 'primary'}
                disabled={todo.isEdit}

            />
                <TextField
                    id="standard-textarea111"
                    fullWidth
                    multiline
                    style={{minWidth:'800px'}}
                    variant="standard"
                    value={editText}
                    size={'medium'}
                    onChange={(e)=>
                    {dispatch(onEditChange(e.target.value))}}
                    autoFocus={todo.isEdit}
                    onKeyDown={(ev) => {
                        if (ev.key === 'Enter') {
                            dispatch(onEditAdd(editText))
                        }
                        if (ev.key==='Escape'){
                            dispatch(cancelEdit(todo.id))
                        }
                    }
                    }


                />
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <Button variant="outlined" size="small"
                        style={{margin:15}}
                        onClick={()=>{
                            dispatch(onTodoEdit(todo.id))
                        }}
                        color={(todo.isComplete) ? 'success' : 'primary'}
                >
                    Edit
                </Button>
                <Button variant="outlined" size="small"
                        style={{margin:15}}
                        onClick={()=> {
                            dispatch(onTodoDelete(todo.id))
                        }}
                        color={(todo.isComplete) ? 'success' : 'primary'}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
};

export default TodoList;