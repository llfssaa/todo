import React from 'react';
import {Box, Button, TextField} from '@mui/material';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {onTextChange, onTodoAdd} from '../redux/actions';
import TodoList from './TodoList';
import {ITodo} from '../redux/reducers/TodoReducer';


const Todo = () => {

    const text = useTypedSelector((state):string => state.todo.inputText)
    const todos = useTypedSelector((state):Array<ITodo> => state.todo.todos)
    const dispatch = useDispatch()

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                    '& button': { m: 1 },
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    margin:'15px',

                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="standard-textarea"
                        label="ToDo..."
                        placeholder="Write your next task here.."
                        multiline
                        variant="standard"
                        value={text}
                        onChange={(e)=>
                        {dispatch(onTextChange(e.target.value as string))}}
                        onKeyDown={(ev) => {
                            if (ev.key === 'Enter') {
                                dispatch(onTodoAdd(text))
                            }
                        }
                        }
                    />
                </div>
                <div>
                    <Button variant="outlined" size="small"
                            onClick={()=>{dispatch(onTodoAdd(text))}}
                    >
                        ADD
                    </Button>
                </div>
            </Box>

            <div>
                {todos.map((todo)=>{
                    return( <TodoList key={todo.id} todo={todo}/>)
                })}
            </div>
        </div>
    );
};

export default Todo;