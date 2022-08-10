export const ON_TEXT_CHANGE = 'ON_TEXT_CHANGE'
export const ON_TODO_ADD = 'ON_TODO_ADD'
export const ON_CHECK_CHANGE = 'ON_CHECK_CHANGE'
export const ON_TODO_DELETE = 'ON_TODO_DELETE'
export const ON_TODO_EDIT = 'ON_TODO_EDIT'
export const ON_EDIT_CHANGE = 'ON_EDIT_CHANGE'
export const ON_EDIT_ADD = 'ON_EDIT_ADD'
export const SET_EDIT = 'SET_EDIT'
export const CANCEL_EDIT = 'CANCEL_EDIT'
export const COMPLETE_TODO = 'COMPLETE_TODO'


interface OnTextChangeActionType {
    type: typeof ON_TEXT_CHANGE,
    text: string
}
interface OnTodoAddActionType {
    type: typeof ON_TODO_ADD,
    text:string
}
interface OnCheckChangeActionType {
    type: typeof ON_CHECK_CHANGE,
    isCheck: boolean
}
interface OnTodoDeleteActionType {
    type: typeof ON_TODO_DELETE,
    id:string
}
interface OnTodoEditActionType {
    type: typeof ON_TODO_EDIT,
    id: string

}
interface OnEditChangeActionType {
    type: typeof ON_EDIT_CHANGE
    text: string
}
interface OnEditAddActionType {
    type: typeof ON_EDIT_ADD
    text: string
}
interface SetEditActionType {
    type: typeof SET_EDIT,
    id: string
}
interface CancelEditActionType {
    type:typeof CANCEL_EDIT,
    id: string
}
interface CompleteTodoActionType {
    type:typeof COMPLETE_TODO,
    id: string
}


export type ActionType = OnTextChangeActionType | OnTodoAddActionType |
    OnCheckChangeActionType | OnTodoDeleteActionType | OnTodoEditActionType |
    OnEditChangeActionType | OnEditAddActionType | SetEditActionType    |
    CancelEditActionType  | CompleteTodoActionType


export const onTextChange = (text:string):OnTextChangeActionType => {
    return {
        type: ON_TEXT_CHANGE,
        text
    }
}


export const onTodoAdd = (text:string):OnTodoAddActionType => ({
    type: ON_TODO_ADD,
    text
})

export const onCheckChange = (isCheck:boolean):OnCheckChangeActionType => ({
    type:ON_CHECK_CHANGE,
    isCheck
})

export const onTodoDelete = (id:string):OnTodoDeleteActionType => ({
    type: ON_TODO_DELETE,
    id
})

export const onTodoEdit = (id:string):OnTodoEditActionType => ({
    type:ON_TODO_EDIT,
    id
})

export const onEditChange = (text:string):OnEditChangeActionType => ({
    type: ON_EDIT_CHANGE,
    text


})

export const onEditAdd = (text:string):OnEditAddActionType => ({
    type: ON_EDIT_ADD,
    text
})

export const setEdit = (id:string):SetEditActionType =>({
    type: SET_EDIT,
    id
})

export const cancelEdit = (id:string):CancelEditActionType =>({
    type: CANCEL_EDIT,
    id
})

export const completedTodo = (id:string):CompleteTodoActionType =>({
    type: COMPLETE_TODO,
    id
})