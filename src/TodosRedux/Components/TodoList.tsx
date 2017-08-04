import * as React from 'react'
import Todo from './Todo'

import { ConnectedProps, ConnectedDispatch } from '../Containers/VisibleTodoList'

class TodoList extends React.Component <ConnectedProps & ConnectedDispatch, {}> {
  render() {
    const { todos, onTodoClick } = this.props
    return (
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        )}
      </ul>
    )
  }
}

export default TodoList
