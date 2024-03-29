import {
    ActionType,
    CANCEL_EDIT,
    COMPLETE_TODO,
    ON_EDIT_ADD,
    ON_EDIT_CHANGE,
    ON_TEXT_CHANGE,
    ON_TODO_ADD,
    ON_TODO_DELETE,
    ON_TODO_EDIT,
    SET_EDIT
} from '../actions';


export interface ITodo {
    id:string,
    text:string,
    isComplete: boolean,
    isEdit: boolean,

}

export interface State {
    todos: Array<ITodo>,
    inputText: string,
    todosCount:number,
    editText: string
}

const initState:State = {
    todos: (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : [],
    inputText: '',
    todosCount: 0,
    editText: ''
}

export const TodoReducer = (state:State = initState, action:ActionType):State =>{
    switch (action.type){
        case ON_TEXT_CHANGE: {
            return {
                ...state,
                inputText: action.text
            }
        }
        case ON_TODO_ADD:{
            localStorage['redux-store'] = JSON.stringify([{
                id: `${action.text+ state.todos.length}`,
                text: action.text,
                isComplete: false,
                isEdit:false,
            }, ...state.todos])
            return {
                ...state,
                todos: [{
                    id: `${action.text+ state.todos.length}`,
                    text: action.text,
                    isComplete: false,
                    isEdit:false,
                }, ...state.todos],

                inputText: ''
            }
        }
        case ON_TODO_DELETE:{
            localStorage['redux-store'] = JSON.stringify(state.todos.filter(el=>{
                if(el.id !== action.id){
                    return el
                }
            }))
            return {
                ...state,
                todos: state.todos.filter(el=>{
                    if(el.id !== action.id){
                        return el
                    }
                })
            }
        }

        case ON_TODO_EDIT:{
            localStorage['redux-store'] = JSON.stringify(state.todos.map(el=>{
                if(el.id === action.id){
                    return{
                        ...el, text: state.editText, isEdit:false
                    }
                }
                return el;
            }))
            return {
                ...state,
                todos: state.todos.map(el=>{
                    if(el.id === action.id){
                        return{
                            ...el, text: state.editText, isEdit:false
                        }
                    }
                    return el;
                })
            }
        }

        case ON_EDIT_CHANGE:{
          return {
              ...state,
              editText: action.text
          }
        }
        case ON_EDIT_ADD:{
            return {
                ...state,
                todos: state.todos.map(el=>{
                    if (el.isEdit){
                        return{...el, text:state.editText, isEdit:false}
                    }
                    return el
                }),
                editText: ''
            }
        }

        case SET_EDIT:{
            return {
                ...state,
                todos: state.todos.map(el=>{
                    if(el.id == action.id){
                        return {
                            ...el, text:el.text, isEdit:!el.isEdit
                        }
                    }
                    return {...el, isEdit: false};
                }),
            }
        }

        case CANCEL_EDIT:{
            return {
                ...state,
                todos:state.todos.map(el=>{
                    if (el.id== action.id){
                        return{
                            ...el, text:el.text, isEdit:false
                        }
                    }
                    return el
                })
            }
        }

        case COMPLETE_TODO:{
            localStorage['redux-store'] = JSON.stringify(state.todos.map(el=>{
                if (el.id===action.id){
                    return {
                        ...el, isComplete:!el.isComplete
                    }
                }
                return el
            }))
            return {
                ...state,
                todos: state.todos.map(el=>{
                    if (el.id===action.id){
                        return {
                            ...el, isComplete:!el.isComplete
                        }
                    }
                    return el
                })
            }
        }


        default: return state
    }
}




