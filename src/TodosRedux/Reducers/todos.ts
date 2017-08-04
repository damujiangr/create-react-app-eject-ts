import { Action } from '../Actions/index'

export type StoreTodo = {
    id: number,
    text?: string,
    completed?: boolean,
}

const todos = (state: Array<StoreTodo> = [], action: Action.AddTodo | Action.ToggleTodo): Array<StoreTodo> => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo: StoreTodo) =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
