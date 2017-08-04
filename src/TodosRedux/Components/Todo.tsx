import * as React from 'react'
import { Store } from '../Reducers/index'

namespace TodoN {
    export type Event = {
        onClick: () => void
    }
    export type Props = Store.Todo & Event
}

class Todo extends React.Component<TodoN.Props, {}> {
  render() {
    const { onClick, completed, text } = this.props
    return (
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </li>
    )
  }
}

export default Todo
