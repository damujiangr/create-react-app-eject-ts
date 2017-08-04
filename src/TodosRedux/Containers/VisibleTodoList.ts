import * as Redux from 'redux'
import { connect } from 'react-redux'
import { toggleTodo } from '../Actions'
import TodoList from '../Components/TodoList'

import { Store } from '../Reducers'

const getVisibleTodos = (todos: Array<Store.Todo>, filter: string) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

export type ConnectedProps = {
  todos: Array<Store.Todo>
}

export type ConnectedDispatch = {
  onTodoClick: (n: number) => void
}

const mapStateToProps = (state: Store.All) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Redux.Dispatch<Store.Todo>): ConnectedDispatch => ({
  onTodoClick: (id) => dispatch(toggleTodo(id))
})

const VisibleTodoList: React.ComponentClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
