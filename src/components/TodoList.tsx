import React from 'react';
import {useDispatch} from 'react-redux';
import {cancelEdit, completedTodo, onEditAdd, onEditChange, onTodoDelete, onTodoEdit, setEdit} from '../redux/actions';
import {Button, Checkbox, IconButton, TextField} from '@mui/material';
import {useTypedSelector} from '../hooks/useTypedSelector';
import ClearIcon from '@mui/icons-material/Clear';


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
                    color={(todo.isComplete) ? 'success' : 'primary'}
                    checked={todo.isComplete}

                />
                <div style={{textDecoration:(todo.isComplete) ? 'line-through' : 'none',
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
            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', width:'100%'}}>
            <Checkbox
                color={(todo.isComplete) ? 'error' : 'primary'}
                disabled={todo.isEdit}

            />
                <TextField
                    id="standard-textarea111"
                    fullWidth
                    autoFocus
                    variant="standard"
                    value={editText}
                    onChange={(e)=>
                    {dispatch(onEditChange(e.target.value))}}
                    onKeyDown={(ev) => {
                        if (ev.key === 'Enter') {
                            dispatch(onTodoEdit(todo.id))
                        }
                        if (ev.key==='Escape'){
                            dispatch(cancelEdit(todo.id))
                        }
                    }
                    }
                />

            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <IconButton size="small"
                            color='error'
                            onClick={()=>{
                                dispatch(cancelEdit(todo.id))
                }}
                >
                    <ClearIcon/>
                </IconButton>
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